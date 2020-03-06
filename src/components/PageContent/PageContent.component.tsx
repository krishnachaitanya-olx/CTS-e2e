import React, { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppLayoutInterface } from './interfaces';
import { Layout } from 'antd';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage.component';
import PageGrid from 'grids/PageGrid/PageGrid.component';

const { Content } = Layout;

const ContentGrid: FC<AppLayoutInterface> = ({ match }) => {
    console.log('coming in match', match);
    return (
    <Layout>
        <Content>
            <Switch>
                <Route exact path='/' component={PageGrid} />
                <Route component={NotFoundPage} />
            </Switch>
        </Content>
    </Layout>
);

}
export default memo(ContentGrid);