import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import './VirtualTable.style.css';
import { getColsWidthFromPercentage } from './utils';

function VirtualTable({
    columns,
    scroll,
    className,
    ...rest
}: TableProps<any>) {
    const [tableWidth, setTableWidth] = useState(0);
    const [colsWithFixedWidth, setColsWithFixedWidth] = useState<
        Record<string, any>[]
    >([]);
    const gridRef = useRef<Grid>();
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

    const resetVirtualGrid = () => {
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
    ) => {
        ref.current = connectObject;
        const height: number = parseInt(`${scroll?.y}`, 10) || 100;

        return (
            <Grid
              ref={gridRef as any}
              className='virtual-grid'
              columnCount={colsWithFixedWidth.length}
              columnWidth={(index) => {
                    const { width } = colsWithFixedWidth[index];
                    return index === colsWithFixedWidth.length - 1
                        ? width - scrollbarSize - 1
                        : width;
                }}
              height={height}
              rowCount={rawData.length}
              rowHeight={() => 170}
              width={tableWidth}
              onScroll={({ scrollLeft }) => {
                    onScroll({
                        scrollLeft,
                    });
                }}
            >
                {({ columnIndex, rowIndex, style }) => {
                    const row = rawData[rowIndex];
                    const col = colsWithFixedWidth[columnIndex] as any;
                    const renderFn = col.render;
                    const result = renderFn ? renderFn(row, row) : row;

                    return (
                        <div
                          className={classNames('virtual-table-cell', {
                                'virtual-table-cell-last':
                                    columnIndex
                                    === colsWithFixedWidth.length - 1,
                            })}
                          style={{
                                ...style,
                            }}
                        >
                            {result}
                        </div>
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
}

export default VirtualTable;
