import React, { ReactElement, memo, FC } from 'react';
import jobsQuery from './Jobs.query';
import columns from './JobsColumns.schema';
import Sidebar from './listing-sidebar/ListingSidebar.component';
import Search from 'components/ListingSearch/ListingSearch.component';
import Table from 'components/ListingTable/ListingTable.component';
import Grid from 'grids/Listings/Listings.component';

const JobsPage: FC<{}> = (): ReactElement => (
  <Grid
    title='Jobs'
    dataSourceGql={{
      query: jobsQuery,
    }}
    Sidebar={Sidebar}
  >
    <Search />
    <Table
      columns={columns}
      className='listing-table'
    />
  </Grid>
);

export default memo(JobsPage);
