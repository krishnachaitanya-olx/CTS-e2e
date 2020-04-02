import React, { FC } from 'react';
import Loading from './Loading.component';

export default {
    title: 'Loading',
    component: Loading,
};

// A spinning loader
export const Spinner: FC = () => (<Loading />);
