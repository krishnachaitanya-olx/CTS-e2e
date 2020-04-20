import { Row, Col, Typography } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Text } = Typography;

const JobStat: FC<SidebarInterface> = () => (
    <Row>
        <Col>
            <Text>Total Applications</Text>
        </Col>
        <Col>
            <Text>Unscreened Applications</Text>
        </Col>
        <Col>
            <Text>Interviews Lined Up</Text>
        </Col>
        <Col>
            <Text>Interviews Pending</Text>
        </Col>
        <Col>
            <Text>Need to Reschedule</Text>
        </Col>
    </Row>
);

export default memo(JobStat);
