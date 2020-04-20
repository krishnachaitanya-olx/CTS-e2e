import { FileAddOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const AddAplication: FC<SidebarInterface> = () => (
    <Button type='primary'>
        <FileAddOutlined />
        Add Application
    </Button>
);

export default memo(AddAplication);
