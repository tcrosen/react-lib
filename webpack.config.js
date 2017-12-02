const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.js`,
    library: pkg.libraryName,
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
