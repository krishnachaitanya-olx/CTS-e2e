import { useQuery } from '@apollo/react-hooks';
import {
 Layout, PageHeader, Row, Col,
} from 'antd';
import { gql } from 'apollo-boost';
import React, { memo, FC } from 'react';
import getComponent from './getComponents';
import { ListingInterface } from './interfaces';
import { PageLayout } from './Styles.styles';
import ListSkelton from 'assests/skeltons/ListingSkelton.component';

const {
 Content,
} = Layout;

const ListingGrid: FC<ListingInterface> = ({ children, title, dataSourceGql }) => {
  const [Table] = getComponent(children);
  const { loading } = useQuery(dataSourceGql?.query || gql``, {
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
      <ListSkelton />
    );
  }
  return (
    <PageLayout>
      <PageHeader
        title={title}
      >
        <Row gutter={{
            xs: 8, sm: 16, md: 24, lg: 32,
          }}
        >
          <Col>
            <>here</>
          </Col>
        </Row>
      </PageHeader>
      <Content>
        <div>
          {
            Table
          }
        </div>
      </Content>
    </PageLayout>
  );
};

export default memo(ListingGrid);
