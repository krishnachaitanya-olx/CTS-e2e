import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const ViewOnAJ: FC<SidebarInterface> = () => (
    <Button>View on AJ</Button>
);

export default memo(ViewOnAJ);
