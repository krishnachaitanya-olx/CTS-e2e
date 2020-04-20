/* eslint-disable react/jsx-props-no-spreading */
import { Row, Col } from 'antd';
import React, { FC, memo } from 'react';
import JobLinks from './JobLinks.component';
import JobState from './JobState.component';
import Tickets from './Tickets.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const StateActions: FC<SidebarInterface> = (props) => (
    <Row>
        <Col>
            <JobState {...props} />
        </Col>
        <Col>
            <Tickets {...props} />
        </Col>
        <Col>
            <JobLinks {...props} />
        </Col>
    </Row>
);

export default memo(StateActions);
