import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const Recommendations: FC<SidebarInterface> = () => (
    <Button type='primary'>
        Recommendations
    </Button>
);

export default memo(Recommendations);
