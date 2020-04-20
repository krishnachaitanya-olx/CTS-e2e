import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const EditButton: FC<SidebarInterface> = () => (
    <Button>Edit</Button>
);

export default memo(EditButton);
