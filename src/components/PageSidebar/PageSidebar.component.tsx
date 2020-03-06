import { Layout, Menu } from 'antd';
import React, { FC, memo } from 'react';

import { AppLayoutInterface } from './interfaces';
import { Link } from 'react-router-dom';
import { VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Item } = Menu;

const Sidebar: FC<AppLayoutInterface> = ({ match }) => (
    <Sider collapsed>
            <Menu
                mode='inline'
                defaultSelectedKeys={[ match.path ]}
            >
                <Item key='/candidates'>
                    <Link to='/candidates'>
                        <VideoCameraOutlined />
                    </Link>
                </Item>
            </Menu>
        </Sider>
);

export default memo(Sidebar);