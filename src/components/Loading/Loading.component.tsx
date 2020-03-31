import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => <Spin aria-label='loading-spinner' indicator={antIcon} />;

export default Loading;
