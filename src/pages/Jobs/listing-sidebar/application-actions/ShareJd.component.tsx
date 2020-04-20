import { Select } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Option } = Select;

const ShareJd: FC<SidebarInterface> = () => (
    <Select defaultValue='shareJd'>
        <Option value='shareJd'>Share Jd</Option>
        <Option value='OPEN'>Job Links</Option>
    </Select>
);

export default memo(ShareJd);
