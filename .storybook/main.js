const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {...config.resolve.alias, ...custom.resolve.alias},
      },
      module: {...config.module, rules: custom.module.rules},
    };
  },
};
