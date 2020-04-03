import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/react';
// import '../src/antd.customize.less';
import 'antd/dist/antd.less';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'someDefault',
    },
});