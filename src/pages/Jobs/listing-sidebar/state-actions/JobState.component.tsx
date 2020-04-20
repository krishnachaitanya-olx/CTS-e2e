import { Select } from 'antd';
import { get } from 'lodash';
import React, { FC, memo } from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Option } = Select;

const JobState: FC<SidebarInterface> = ({ data }) => (
    <Select defaultValue={get(data, 'state')}>
        <Option value='OPEN'>Open</Option>
        <Option value='CLOSED'>Closed</Option>
        <Option value='PAUSED'>Paused</Option>
    </Select>
);

export default memo(JobState);
