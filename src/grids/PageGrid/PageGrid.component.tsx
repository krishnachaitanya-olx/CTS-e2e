import { Col, Row } from 'antd';
import React, { memo } from 'react';

import Routes from 'components/Routes/Routes.component';

// todo: add modal and hotkeys
const PageGrid = () => {
    return (
      <Row>
        <Col span={24}>
          <Routes />
        </Col>
      </Row>
    )
};

export default memo(PageGrid);