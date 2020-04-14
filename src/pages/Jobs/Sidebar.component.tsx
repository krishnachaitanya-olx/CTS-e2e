import { CloseOutlined } from '@ant-design/icons';
import { Row, Col, Typography } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import SidebarInterface from './interfaces';

const { Title } = Typography;

const Sidebar: FC<SidebarInterface> = ({ data, openSidebar }) => {
    console.log('coming in sidebar', data);
    return (
        <Row gutter={16}>
            {/* Sidebar actions */}
            <Col span={24}>
                <Row gutter={8}>
                    <Col span={22}>
                        here
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
                <Title level={2}>
                    { get(data, 'title', '') }
                </Title>
            </Col>
            {/* Job status */}
            <Col span={24}>
                <Row>
                    <Col>
                        Open
                    </Col>
                    <Col>
                        Ticket
                    </Col>
                </Row>
            </Col>
            {/* Job stat */}
            <Col span={24}>
                Stat
            </Col>
        </Row>
    );
};

export default memo(Sidebar);
