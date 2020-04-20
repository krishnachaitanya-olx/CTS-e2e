/* eslint-disable react/jsx-props-no-spreading */
import { Row, Skeleton } from 'antd';
import React, {
 FC, memo, lazy, Suspense,
} from 'react';
import SidebarInterface from 'pages/Jobs/listing-sidebar/interfaces';

const { Button } = Skeleton;
const Edit = lazy(() => import('./EditJob.component'));
const Duplicate = lazy(() => import('./DuplicateJob.component'));
const ViewOnAJ = lazy(() => import('./ViewOnAJ.component'));
const History = lazy(() => import('./JobHistory.component'));
const Call = lazy(() => import('./Call.component'));

const HeaderActions: FC<SidebarInterface> = (props) => (
    <Row gutter={8}>
        <Suspense fallback={Button}>
            <Edit {...props} />
            <Duplicate {...props} />
            <ViewOnAJ {...props} />
            <History {...props} />
            <Call {...props} />
        </Suspense>
    </Row>
);

export default memo(HeaderActions);
