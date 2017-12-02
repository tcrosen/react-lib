var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-lib.js',
    library: 'myLib',
    libraryTarget: 'umd',
  },
  externals: ['react', 'react-dom'],
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
