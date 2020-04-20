import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const SampleResume: FC<SidebarInterface> = () => (
    <Button type='primary'>
        Sample Resume
    </Button>
);

export default memo(SampleResume);
