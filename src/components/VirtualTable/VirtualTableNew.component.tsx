/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';

/* eslint-disable */
function VirtualTable(props: any) {
  const { columns, scroll, className } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }: any) => !width).length;
  const mergedColumns = columns.map((column: any) => {
    if (column.width) {
      return column;
    }

    return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  });
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
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last':
                columnIndex === mergedColumns.length - 1
            })}
            style={style}
          >
            {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
          </div>
        )}
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
      />
    </ResizeObserver>
  );
} // Usage

const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150
  },
  {
    title: 'B',
    dataIndex: 'key'
  },
  {
    title: 'C',
    dataIndex: 'key'
  },
  {
    title: 'D',
    dataIndex: 'key'
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100
  }
];
const data: any = [];

for (let i = 0; i < 999; i += 1) {
  data.push({
    key: i
  });
}

export default () => <VirtualTable columns={columns} dataSource={data} scroll={{ y: 300, x: '100vw' }} />;
