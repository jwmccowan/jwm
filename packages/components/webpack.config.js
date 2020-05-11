// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const alter = require('./.storybook/webpack.config');

const baseConfig = {
  entry: './src/index.ts',
  externals: ['react', 'react-dom', 'i18next', 'moment-timezone'],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      // Storybook provides a default CSS loading. We use this one in production builds
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    library: 'components',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {},
    extensions: [],
  },
};

module.exports = alter({ config: baseConfig, tsconfigPath: path.join(__dirname, 'tsconfig.json') });
