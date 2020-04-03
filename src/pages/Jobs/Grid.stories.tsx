import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import React, { FC } from 'react';
import mockData from './Jobs.fixture';
import jobsQuery from './Jobs.query';
import columns from './JobsColumns.schema';
import Table from 'components/ListingTable/ListingTable.component';
import Grid from 'grids/Listings/Listings.component';

const successMock: MockedResponse = {
    request: {
        query: jobsQuery,
        variables: {
            filters: {},
            sort: 'modified__DESC',
            first: 20,
            after: 0,
        },
    },
    result: {
        data: mockData,
    },
};

export const Basic: FC = () => (
    <MockedProvider
      mocks={[successMock]}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: 'no-cache' },
        query: { fetchPolicy: 'no-cache' },
    }}
    >
        <Grid
          title='Jobs'
          dataSourceGql={{
              query: jobsQuery,
            }}
        >
            <Table
              columns={columns}
              className='listing-table'
            />
        </Grid>
    </MockedProvider>
);

export default {
    title: 'Grid',
    component: Basic,
};
