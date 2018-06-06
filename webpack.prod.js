const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const pkg = require('./package.json');

module.exports = merge(common, {
  entry: {
    Button: './src/Button.js',
    ButtonGroup: './src/ButtonGroup.js',
    ToggleButton: './src/ToggleButton.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd'
  },
  externals: Object.keys(pkg.dependencies)
});
