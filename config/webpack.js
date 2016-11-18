const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../dist');

const config = {
  entry: {
    app: `${SRC_DIR}/app/index.jsx`,
    style: `${SRC_DIR}/app/main.css`,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        include: SRC_DIR,
        test: /\.jsx?$/,
      },
      {
        loaders: [
          'style',
          'css',
        ],
        include: SRC_DIR,
        test: /\.css$/,
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
