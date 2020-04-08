/* eslint-disable react/jsx-props-no-spreading */
import { CloseOutlined } from '@ant-design/icons';
import {
 Drawer, Row, Col, Typography,
} from 'antd';
import { DrawerProps } from 'antd/lib/drawer/index';
import React, { FC, memo } from 'react';
import ListingSidebarInterface from './interfaces';
import { get } from 'lodash';

const { Title } = Typography;

const ListingSidebar: FC<DrawerProps & ListingSidebarInterface> = ({
    visible = false,
    getContainer,
    data,
    ...rest
}: DrawerProps & ListingSidebarInterface) => (
    <Drawer
      keyboard
      destroyOnClose
      visible={visible}
      getContainer={getContainer}
      mask={false}
      closable={false}
      {...rest}
    >
      <Row gutter={16}>
        {/* Sidebar actions */}
        <Col span={24}>
          <Row gutter={8}>
            <Col span={22}>
              here
            </Col>
            <Col span={2}>
              <CloseOutlined
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
              <Row justify='end'>
                <Col>
                  Ticket
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* Job stat */}
        <Col span={24}>
          Stat
        </Col>
      </Row>
    </Drawer>
);

export default memo(ListingSidebar);
