import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const DuplicateJob: FC<SidebarInterface> = () => (
    <Button>Duplicate</Button>
);

export default memo(DuplicateJob);
