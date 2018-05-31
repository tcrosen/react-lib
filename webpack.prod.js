const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const pkg = require('./package.json');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    Button: './src/Button.js',
    ButtonGroup: './src/ButtonGroup.js',
    ToggleButton: './src/ToggleButton.js'
  },
  externals: Object.keys(pkg.dependencies),
  output: {
    libraryTarget: 'umd'
  }
});
