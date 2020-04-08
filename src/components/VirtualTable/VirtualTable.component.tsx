import { Table } from 'antd';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import React, {
 useState, useEffect, useRef, FC, memo, ReactElement,
} from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import { VirtualTableProps } from './interface';
import { getColsWidthFromPercentage } from './utils';
import VirtualTableCell from './VirtualTable.styles';

const VirtualTable: FC<VirtualTableProps<any>> = ({
    columns,
    scroll,
    className,
    rowHeight = 170,
    ...rest
}) => {
    const [tableWidth, setTableWidth] = useState(0);
    const [colsWithFixedWidth, setColsWithFixedWidth] = useState<
        Record<string, any>[]
    >([]);
    const gridRef = useRef<Grid>(null);
    const [connectObject] = useState(() => {
        const obj = {};
        Object.defineProperty(obj, 'scrollLeft', {
            get: () => null,
            set: (scrollLeft: number) => {
                if (gridRef.current) {
                    gridRef.current.scrollTo({
                        scrollLeft,
                    } as any);
                }
            },
        });
        return obj;
    });

    const resetVirtualGrid = (): void => {
        gridRef.current?.resetAfterIndices({
            rowIndex: 0,
            columnIndex: 0,
            shouldForceUpdate: false,
        });
    };

    useEffect(() => resetVirtualGrid, []);
    useEffect(() => resetVirtualGrid, [tableWidth]);

    const renderVirtualList = (
        rawData: Record<string, any>,
        { scrollbarSize, ref, onScroll }: any,
    ): ReactElement => {
        ref.current = connectObject;
        const height: number = parseInt(`${scroll?.y}`, 10) || 100;

        return (
            <Grid
              ref={gridRef}
              className='virtual-grid'
              columnCount={colsWithFixedWidth.length}
              columnWidth={(index): number => {
                    const { width } = colsWithFixedWidth[index];
                    return index === colsWithFixedWidth.length - 1
                        ? width - scrollbarSize - 1
                        : width;
                }}
              height={height}
              rowCount={rawData.length}
              rowHeight={(): number => rowHeight}
              width={tableWidth}
              onScroll={({ scrollLeft }): void => {
                    onScroll({
                        scrollLeft,
                    });
                }}
            >
                {({ columnIndex, rowIndex, style }): ReactElement => {
                    const row = rawData[rowIndex];
                    const col = colsWithFixedWidth[columnIndex];
                    const renderFn = col.render;
                    const result = renderFn ? renderFn(row, row) : row;

                    return (
                        <VirtualTableCell isFirstCell={columnIndex === 0} isLastRowCell={rowIndex === rawData.length - 1} style={{ ...style, overflow: 'auto' }}>
                            {result}
                        </VirtualTableCell>
                    );
                }}
            </Grid>
        );
    };

    return (
        <ResizeObserver
          onResize={({ width }: { width: number }): void => {
                setTableWidth(width);
                if (columns) {
                    setColsWithFixedWidth(
                        getColsWidthFromPercentage(columns, width),
                    );
                }
            }}
        >
            {/* eslint-disable react/jsx-props-no-spreading */}
            <Table
              {...rest}
              scroll={scroll}
              className={classNames(className, 'virtual-table')}
              columns={colsWithFixedWidth}
              pagination={false}
              components={{
                    body: renderVirtualList,
                }}
            />
        </ResizeObserver>
    );
};

export default memo(VirtualTable);
