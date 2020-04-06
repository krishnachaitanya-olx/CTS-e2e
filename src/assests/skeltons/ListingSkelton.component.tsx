import {
 Skeleton, Layout, PageHeader, Row, Col,
} from 'antd';
import React, { FC, memo } from 'react';
import TableSkelton from './TableSkelton.component';

const { Button, Input } = Skeleton;
const { Content } = Layout;

const ListingGridSkelton: FC<{}> = () => (
    <Layout>
        <PageHeader
          title={<Button active />}
        >
            <Row gutter={{
                xs: 8, sm: 16, md: 24, lg: 32,
                }}
            >
                <Col span={4}>
                    <Input active style={{ width: '100%' }} />
                </Col>
                <Col span={2}>
                    <Button active style={{ width: '100%' }} />
                </Col>
                <Col span={2}>
                    <Button active style={{ width: '100%' }} />
                </Col>
                <Col span={10}>
                    <Row justify='end'>
                        <Col span={3}>
                            <Button active style={{ width: '100%' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </PageHeader>
        <Content>
            <TableSkelton />
        </Content>
    </Layout>
);

export default memo(ListingGridSkelton);
