import React, { FC, memo } from 'react';
import Button from 'components/Button/Button.component';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const SourceCandidate: FC<SidebarInterface> = () => (
    <Button type='primary'>
        Source Candidates
    </Button>
);

export default memo(SourceCandidate);
