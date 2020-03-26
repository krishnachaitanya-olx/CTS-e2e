import { Col, Row } from 'antd';
import React, { memo, FC } from 'react';

import Routes from 'components/Routes/Routes.component';

// todo: add modal and hotkeys
const PageGrid: FC<{}> = () => (
  <Row>
    <Col span={24}>
      <Routes />
    </Col>
  </Row>
);

export default memo(PageGrid);
