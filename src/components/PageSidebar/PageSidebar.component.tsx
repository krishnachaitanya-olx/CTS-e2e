import { VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { FC, memo } from 'react';

import { Link } from 'react-router-dom';
import { AppLayoutInterface } from './interfaces';

const { Sider } = Layout;
const { Item } = Menu;

const Sidebar: FC<AppLayoutInterface> = ({ match }) => (
    <Sider collapsed>
        <Menu
          mode='inline'
          defaultSelectedKeys={[match.path]}
        >
            <Item key='/candidates'>
                <Link to='/candidates' aria-label='link-to-candidates'>
                    <VideoCameraOutlined />
                </Link>
            </Item>
        </Menu>
    </Sider>
);

export default memo(Sidebar);
