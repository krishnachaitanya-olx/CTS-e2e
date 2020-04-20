import { Select } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Option } = Select;

const JobLinks: FC<SidebarInterface> = () => (
    <Select defaultValue='jobLinks'>
        <Option value='jobLinks'>Job Links</Option>
        <Option value='OPEN'>Job Links</Option>
    </Select>
);

export default memo(JobLinks);
