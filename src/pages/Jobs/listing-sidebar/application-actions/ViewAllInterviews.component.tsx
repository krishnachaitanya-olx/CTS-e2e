import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const ViewAllInterviews: FC<SidebarInterface> = () => (
    <Button type='primary'>
        View All Interviews
    </Button>
);

export default memo(ViewAllInterviews);
