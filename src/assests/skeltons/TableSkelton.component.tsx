import { Skeleton, Table } from 'antd';
import React, { FC, memo, ReactNode } from 'react';

const { Button } = Skeleton;

const columns = [
    {
        title: <Button active />,
        render: (): ReactNode => <Button active />,
        key: '1',
    },
    {
        title: <Button active />,
        render: (): ReactNode => <Button active />,
        key: '2',
    },
    {
        title: <Button active />,
        render: (): ReactNode => <Button active />,
        key: '3',
    },
    {
        title: <Button active />,
        render: (): ReactNode => <Button active />,
        key: '4',
    },
    {
        title: <Button active />,
        render: (): ReactNode => <Button active />,
        key: '5',
    },
];

const data = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }];

const TableSkelton: FC<object> = () => (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      style={{ margin: 25, border: 'solid 1px #d4e7fc' }}
    />
);

export default memo(TableSkelton);
