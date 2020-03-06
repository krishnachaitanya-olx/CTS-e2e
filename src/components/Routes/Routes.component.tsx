import { Col, Row } from 'antd';
import React, { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import JobsPage from 'pages/Jobs/Jobs.component';

// todo: add modal and hotkeys
const PageGrid: FC<{}> = () => (
    <Row>
        <Col span={24}>
            <Switch>
                <Route
                  exact
                  path='/jobs'
                  component={JobsPage}
                />
            </Switch>
        </Col>
    </Row>
);

export default memo(PageGrid);
