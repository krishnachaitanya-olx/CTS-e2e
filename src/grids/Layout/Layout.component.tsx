import React, { FC, lazy, memo } from 'react';

import { AppLayoutInterface } from './interfaces';
import LazyLoad from 'components/Lazy/Lazy.component';
import PageLayout from './Layout.style';

const Sidebar = lazy(() => import('components/PageSidebar/PageSidebar.component'));
const Content = lazy(() => import('components/PageContent/PageContent.component'));

const AppLayout: FC<AppLayoutInterface> = ({ match, location }) => (
    <PageLayout hasSider>
        <LazyLoad>
            <Sidebar match={match} location={location} />
        </LazyLoad>
        <LazyLoad>
            <Content match={match} location={location} />
        </LazyLoad>
    </PageLayout>
);

export default memo(AppLayout);
