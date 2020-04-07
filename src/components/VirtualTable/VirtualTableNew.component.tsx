/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';
import './VirtualTable.style.css';

/* eslint-disable */
function VirtualTable(props: any) {
  const { columns, scroll, className } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const mergedColumns = columns;
  console.log(mergedColumns);
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: scrollLeft => {
        if (gridRef.current) {
          (gridRef.current as any).scrollTo({
            scrollLeft
          });
        }
      }
    });
    return obj;
  });

  const resetVirtualGrid = () => {
    (gridRef.current as any).resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false
    });
  };

  useEffect(() => resetVirtualGrid, []);
  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData: Record<string, any>, { scrollbarSize, ref, onScroll }: any) => {
    ref.current = connectObject;
    return (
      <Grid
        ref={gridRef as any}
        className='virtual-grid'
        columnCount={mergedColumns.length}
        columnWidth={index => {
          const { width } = mergedColumns[index];
          return index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 170}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          const row = rawData[rowIndex];
          const col = mergedColumns[columnIndex] as any;
          const renderFn = col.render;
          const result = renderFn? renderFn(row, row): row;

          return (
            <div style={{position: 'relative', width: '100%'}}>
              <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last':
                  columnIndex === mergedColumns.length - 1
              })}
              style={{
                ...style,
                width: '10%'
              }}
              >
              {result}
            </div>
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
        {...props}
        className={classNames(className, 'virtual-table')}
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
        width={tableWidth}
      />
    </ResizeObserver>
  );
}

export default VirtualTable;
