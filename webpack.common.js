const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  }
};
