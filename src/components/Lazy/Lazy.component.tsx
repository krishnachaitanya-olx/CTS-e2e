import React, { FC, ReactElement, Suspense } from 'react';

import Loading from '../Loading/Loading.component';

const Lazy: FC<{ children: ReactElement }> = ({ children }) => (
    <Suspense fallback={<Loading />}>
      { children }
    </Suspense>
);

export default Lazy;
