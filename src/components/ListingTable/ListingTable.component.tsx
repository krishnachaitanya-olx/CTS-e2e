/* eslint-disable react/jsx-props-no-spreading */
import { TableProps } from 'antd/lib/table';
import React, { FC } from 'react';
import VirtualTable from 'components/VirtualTable/VirtualTableNew.component';

const ListingTable: FC<TableProps<any>> = ({
    columns,
    dataSource,
    ...rest
}: TableProps<any>) => (
    <VirtualTable
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered
      tableLayout='fixed'
      scroll={{ y: 700, x: '100vw' }}
      style={{
            margin: 25,
            border: 'solid 1px #d4e7fc',
        }}
      {...rest}
    />
);

export default ListingTable;
