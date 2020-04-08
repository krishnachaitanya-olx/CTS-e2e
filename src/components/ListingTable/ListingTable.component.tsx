/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { VirtualTableProps } from 'components/VirtualTable/interface';
import VirtualTable from 'components/VirtualTable/VirtualTable.component';
import useVh from 'hooks/useVh';

const ListingTable: FC<VirtualTableProps<any>> = ({
    columns,
    dataSource,
    ...rest
}: VirtualTableProps<any>) => {
  const vh = useVh(70);
  return (
    <VirtualTable
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      bordered
      tableLayout='fixed'
      scroll={{ y: vh, x: '100vw' }}
      style={{
            margin: 25,
            border: 'solid 1px #d4e7fc',
        }}
      {...rest}
    />
  );
};

export default ListingTable;
