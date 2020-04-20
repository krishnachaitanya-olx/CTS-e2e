import {
    CloseOutlined,
} from '@ant-design/icons';
import {
 Row, Col, Typography,
} from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import ApplicationActions from './application-actions/ApplicationActions.component';
import HeaderActions from './header-actions/HeaderActions.component';
import SidebarInterface from './interfaces';
import JobStat from './job-stat/JobStat.component';
import StateActions from './state-actions/StateActions.component';

const { Title } = Typography;

const Sidebar: FC<SidebarInterface> = ({ data, openSidebar }) => {
    console.log('coming in sidebar', data);
    return (
        <Row gutter={16}>

            {/* Sidebar actions */}
            <Col span={24} className='mb-10'>
                <Row gutter={8}>
                    <Col span={22}>
                        <HeaderActions
                          data={data}
                          openSidebar={openSidebar}
                        />
                    </Col>
                    <Col span={2}>
                        <CloseOutlined
                          onClick={(): void => openSidebar(false)}
                          style={{ fontSize: '1.25rem', color: 'black', float: 'right' }}
                        />
                    </Col>
                </Row>
            </Col>

            {/* Title */}
            <Col span={24}>
                <Title level={2} style={{ textTransform: 'capitalize' }}>
                    { get(data, 'title', '') }
                </Title>
            </Col>

            {/* Job status */}
            <Col span={24} className='mb-10'>
                <StateActions
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Job stat */}
            <Col span={24} className='mb-10'>
                <JobStat
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>

            {/* Common Actions */}
            <Col span={24} className='mb-10'>
                <ApplicationActions
                  data={data}
                  openSidebar={openSidebar}
                />
            </Col>
        </Row>
    );
};

export default memo(Sidebar);
