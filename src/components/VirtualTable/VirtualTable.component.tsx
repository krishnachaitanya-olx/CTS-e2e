/* eslint-disable */
import React, { useState, useEffect, useRef, FC, memo } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';
import './VirtualTable.style.css';
import { TableProps, ColumnsType } from 'antd/lib/table';
import { mergedColumns } from './utils';

/* eslint-disable */
const VirtualTable: FC<TableProps<any>> = ({
  className,
  columns,
  pagination,
  scroll,
  dataSource,
  ...rest
}) => {
  const [tableWidth, setTableWidth] = useState(0);
  const virtualTableColumns: ColumnsType<object> = mergedColumns(columns, tableWidth);

  const gridRef = useRef<any>();
  const [connectObject] = useState<any>(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });

    return obj;
  });


  const resetVirtualGrid = () => {
    gridRef.current?.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false
    });
  };

  useEffect(() => resetVirtualGrid, []);
  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData: Record<string, any>, { scrollbarSize, ref, onScroll }: any) => {
    ref.current = connectObject;
    const height: number = parseInt(`${scroll?.y}`, 10) || 100;

    return (
      <Grid
        ref={gridRef}
        className='virtual-grid'
        columnCount={virtualTableColumns.length}
        columnWidth={index => {
          const { width }: any = virtualTableColumns[index];
          return index === virtualTableColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={height}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const row = rawData[rowIndex];
          const col = virtualTableColumns[columnIndex] as any;
          const renderFn = col.render;
          const record = row[col.dataIndex];
          const result = renderFn? renderFn(record): record;

          return (
            <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last':
                  columnIndex === virtualTableColumns.length - 1
              })}
              style={style}
            >
              <p>hello</p>
            </div>
          );
        }}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...rest}
        className={classNames(className, 'virtual-table')}
        columns={virtualTableColumns}
        pagination={pagination}
        components={{
          body: renderVirtualList,
        }}
        dataSource={dataSource}
      />
    </ResizeObserver>
  );
}

export default VirtualTable;
