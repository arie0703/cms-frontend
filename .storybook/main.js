const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    "@storybook/addon-viewport",
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    return config;
  }
};
