import { Layout } from 'antd';
import React, { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppLayoutInterface } from './interfaces';
import PageGrid from 'grids/PageGrid/PageGrid.component';

const { Content } = Layout;

const ContentGrid: FC<AppLayoutInterface> = () => (
    <Layout>
        <Content>
            <Switch>
                <Route exact path='/' component={PageGrid} />
            </Switch>
        </Content>
    </Layout>
);

export default memo(ContentGrid);
