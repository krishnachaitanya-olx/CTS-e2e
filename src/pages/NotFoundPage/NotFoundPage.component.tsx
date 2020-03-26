import { Button, Result } from 'antd';
import React, { FC, memo } from 'react';

export const NotFoundPage: FC<{}> = () => (
  <Result
    status={404}
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={<Button type='primary' href='/'>Back Home</Button>}
  />
);

export default memo(NotFoundPage);
