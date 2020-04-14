import { Table } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import React, {
 useState, useEffect, useRef, FC, memo, ReactElement,
} from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import { VirtualTableProps } from './interface';
import { getColsWidthFromPercentage, mergedColumns } from './utils';
import VirtualTableCell from './VirtualTable.styles';

const VirtualTable: FC<VirtualTableProps<any>> = ({
    columns,
    scroll,
    className,
    rowHeight = 190,
    ...rest
}) => {
    const [tableWidth, setTableWidth] = useState(1000);
    // if we don't initialize this with some initial value
    // tests will break as ResizeObserver would never be triggered
    const [colsWithFixedWidth, setColsWithFixedWidth] = useState<
        Record<string, any>[]
    >(getColsWidthFromPercentage(mergedColumns(columns, tableWidth), tableWidth));
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
        if (gridRef.current) {
            gridRef.current.resetAfterIndices({
                rowIndex: 0,
                columnIndex: 0,
                shouldForceUpdate: false,
            });
        }
    };

    useEffect(() => resetVirtualGrid, []);
    useEffect(() => resetVirtualGrid, [tableWidth]);

    const renderVirtualList = (
        rawData: Record<string, any>,
        { scrollbarSize, ref, onScroll }: any,
    ): ReactElement => {
        ref.current = connectObject;
        const height: number = parseInt(`${scroll && scroll.y}`, 10) || 100;

        return (
            <Grid
              ref={gridRef}
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
                    const result = renderFn ? renderFn(row, row) : row[col.dataIndex];

                    return (
                        <VirtualTableCell isFirstCell={columnIndex === 0} isLastRowCell={rowIndex === rawData.length - 1} style={{ ...style, overflow: 'auto' }}>
                            {result}
                        </VirtualTableCell>
                    );
                }}
            </Grid>
        );
    };
    console.log('coming in rest', rest);
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
              className={className}
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
