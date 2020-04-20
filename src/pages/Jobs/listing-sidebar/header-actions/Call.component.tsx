import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const Call: FC<SidebarInterface> = () => (
    <Button>Call</Button>
);

export default memo(Call);
