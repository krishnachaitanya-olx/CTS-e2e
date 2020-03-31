/* eslint-disable react/jsx-props-no-spreading */
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import React, { FC } from 'react';

const ListingTable: FC<TableProps<any>> = ({
  columns, dataSource, ...rest
}: TableProps<any>) => (
  <Table
    columns={columns}
    dataSource={dataSource}
    pagination={false}
    bordered
    tableLayout='fixed'
    scroll={{
      y: '70vh',
      x: 'max-content',
    }}
    style={{
      margin: 25,
      border: 'solid 1px #d4e7fc',
    }}
    {...rest}
  />
);

export default ListingTable;
