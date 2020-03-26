import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import React, { FC } from 'react';

const ListingTable: FC<TableProps<any>> = ({ columns, dataSource }: TableProps<any>) => (
    <Table
      columns={columns}
      dataSource={dataSource}
    />
);

export default ListingTable;
