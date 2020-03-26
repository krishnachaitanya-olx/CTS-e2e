import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/lib/table';

import ResizeObserver from 'rc-resize-observer';
import React, {
  memo, useState, FC, useRef, useEffect, ReactElement,
} from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import { VirualTableProps } from './interfaces';
import { mergedColumns } from './utils';

const VirtalTable: FC<TableProps<any> & VirualTableProps> = ({
  className,
  columns,
  pagination,
  scroll,
  dataSource,
  Template,
}: TableProps<any> & VirualTableProps) => {
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

  const resetVirtualGrid = (): void => {
    if (gridRef && gridRef.current) {
      gridRef.current.resetAfterIndices({
        columnIndex: 0,
        shouldForceUpdate: false,
      });
    }
  };

  useEffect(() => resetVirtualGrid, []);
  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (
    rawData: object[],
    { scrollbarSize, ref, onScroll }: any,
  ): ReactElement => {
    ref.current = connectObject;
    const height: number = parseInt(`${scroll?.y}`, 10) || 100;
    return (
      <Grid
        ref={gridRef}
        className='virtual-grid'
        columnCount={virtualTableColumns.length}
        columnWidth={(index: number): number => {
          const { width }: any = virtualTableColumns[index];
          const size: number = width - scrollbarSize - 1;
          if (index === virtualTableColumns.length - 1) {
            return size;
          }
          return width;
        }}
        height={height}
        rowCount={rawData.length}
        rowHeight={(): number => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }): void => {
          onScroll({ scrollLeft });
        }}
      >
        {Template}
      </Grid>
    );
  };
  return (
      <ResizeObserver
        onResize={({ width }): void => {
          setTableWidth(width);
        }}
      >
          <Table
            className={`virtual-table ${className || ''}`}
            columns={virtualTableColumns}
            pagination={pagination}
            dataSource={dataSource}
            components={{
              body: renderVirtualList,
            }}
          />
      </ResizeObserver>
  );
};

export default memo(VirtalTable);
