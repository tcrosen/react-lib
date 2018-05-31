const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    App: './src/App.js'
  },
  mode: 'development',
  devServer: {
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
});
