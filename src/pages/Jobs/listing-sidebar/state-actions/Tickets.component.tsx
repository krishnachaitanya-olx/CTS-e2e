import { Select } from 'antd';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Option } = Select;

const Tickets: FC<SidebarInterface> = () => (
    <Select defaultValue='tickets'>
        <Option value='tickets'>Tickets</Option>
        <Option value='OPEN'>Job Links</Option>
    </Select>
);

export default memo(Tickets);
