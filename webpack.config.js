const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: {
    Button: './src/Button.js',
    ButtonGroup: './src/ButtonGroup.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  externals: Object.keys(pkg.dependencies),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        loader: 'babel-loader',
      },
    ],
  },
};
