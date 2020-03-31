import { useQuery } from '@apollo/react-hooks';
import {
 Layout, PageHeader, Row, Col, Result,
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
const areEqual = (): boolean => true;

const ListingGrid: FC<ListingInterface> = ({ children, title, dataSourceGql }) => {
  const {
    loading, error, data,
  } = useQuery(dataSourceGql?.query || gql``, {
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

  if (error) {
    return (
      <Result
        status='500'
        title='500'
        subTitle='Sorry, Server returned an error.'
      />
    );
  }
  const [Table] = getComponent(children, data);
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
        {
          Table
        }
      </Content>
    </PageLayout>
  );
};

export default memo(ListingGrid, areEqual);
