import React, { FC, lazy } from 'react';
import Lazy from './Lazy.component';

export default {
    title: 'Lazy',
    component: Lazy,
};

const LazyExample = lazy<FC>(() => import('./LazyExample.component'));

// A spinning loader
export const Basic: FC = () => (
    <Lazy>
        <LazyExample />
    </Lazy>
);
