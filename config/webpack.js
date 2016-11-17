const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../dist');

const config = {
  entry: `${SRC_DIR}/app/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        include: SRC_DIR,
        test: /\.jsx?/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello, React!',
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
    }),
  ],
};

module.exports = config;
