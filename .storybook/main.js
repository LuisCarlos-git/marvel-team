module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',

  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.module.rules.push({
      test: /\.ts$/,
      loader: require.resolve('@open-wc/webpack-import-meta-loader'),
    });

    return config;
  },
};