import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const JobHistory: FC<SidebarInterface> = () => (
    <Button>Job History</Button>
);

export default memo(JobHistory);
