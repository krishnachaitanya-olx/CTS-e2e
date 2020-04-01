import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, { FC } from 'react';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading: FC<{}> = () => <Spin aria-label='loading-spinner' indicator={antIcon} />;

export default Loading;
