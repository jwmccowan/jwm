const path = require('path');

module.exports = ({ config, tsconfigPath = path.join(__dirname, '../tsconfig.storybook.json') }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: tsconfigPath,
          projectReferences: true,
        },
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      // There is an issue with TypeScript and @storybook/source-loader. It should be fixed in Storybook v5.3
      // https://github.com/storybookjs/storybook/issues/7829
      // {
      //     loader: require.resolve('@storybook/source-loader'),
      //     options: { parser: 'typescript' },
      // },
    ],
  });

  config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
  config.resolve.extensions.push('.js', '.ts', '.tsx');
  return config;
};
