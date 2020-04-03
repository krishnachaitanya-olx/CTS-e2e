const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register'
  ],

  // this is required to support imports like
  // import Loading from 'components/Loading/Loading.component'
  // https://github.com/storybookjs/storybook/issues/4944#issuecomment-444997113
  webpackFinal: (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
