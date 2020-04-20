import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Text } = Typography;

const Vacancies: FC<SidebarInterface> = () => (
    <Row>
        <Col span={24}>
            <Text type='danger'>Vacancies</Text>
        </Col>
    </Row>
);

export default memo(Vacancies);
