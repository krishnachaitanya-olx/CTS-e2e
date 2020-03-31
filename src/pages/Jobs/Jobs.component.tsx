import React, { ReactElement, memo, FC } from 'react';
import jobsQuery from './Jobs.query';
import columns from './JobsColumns.schema';
import Table from 'components/ListingTable/ListingTable.component';
import Grid from 'grids/Listings/Listings.component';

const JobsPage: FC<{}> = (): ReactElement => (
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
);

export default memo(JobsPage);
