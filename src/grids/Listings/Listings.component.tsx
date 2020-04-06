import { useQuery } from '@apollo/react-hooks';
import {
 Layout, PageHeader, Row, Col, Result,
} from 'antd';
import { gql } from 'apollo-boost';
import React, { memo, FC } from 'react';
// import dummyData from './dummyData';
import getComponent from './getComponents';
import { ListingInterface } from './interfaces';
import { PageLayout } from './Styles.styles';
import ListSkelton from 'assests/skeltons/ListingSkelton.component';

const {
 Content,
} = Layout;
const areEqual = (): boolean => true;

const ListingGrid: FC<ListingInterface> = ({ children, title, dataSourceGql }) => {
  const {
    loading, error, data,
    // TODO: change dataSourceGql to optional chaining after fixing jest
  } = useQuery((dataSourceGql && dataSourceGql.query) || gql``, {
    skip: !dataSourceGql || !dataSourceGql.query,
    variables: {
      filters: {},
      sort: 'modified__DESC',
      first: 20,
      after: 0,
    },
  });
  if (loading) {
    return (
      <div aria-label='loading-skeleton'>
        <ListSkelton />
      </div>
    );
  }
  if (error) {
    return (
      <Result
        status='500'
        title='500'
        subTitle='Sorry, Server returned an error.'
      />
    );
  }
  const [Table, Search] = getComponent(children, data);
  return (
    <PageLayout>
      <PageHeader
        title={title}
      >
        <Content>
          <Row gutter={{
              xs: 8, sm: 16, md: 24, lg: 32,
            }}
          >
            <Col span={6}>
              {
                Search
              }
            </Col>
          </Row>
        </Content>
      </PageHeader>
      <Content>
        {
          Table
        }
      </Content>
    </PageLayout>
  );
};

export default memo(ListingGrid, areEqual);
