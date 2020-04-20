import { MessageOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const MakeCampaign: FC<SidebarInterface> = () => (
    <Button type='primary'>
        <MessageOutlined />
        Make Campaign
    </Button>
);

export default memo(MakeCampaign);
