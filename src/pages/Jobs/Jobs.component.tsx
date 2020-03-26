import React, { ReactElement, memo, FC } from 'react';
import jobsQuery from './Jobs.query';
import Grid from 'grids/Listings/Listings.component';

const JobsPage: FC<{}> = (): ReactElement => (
  <Grid
    title='Jobs'
    dataSourceGql={{
      query: jobsQuery,
    }}
  >
    <>hello</>
  </Grid>
);

export default memo(JobsPage);
