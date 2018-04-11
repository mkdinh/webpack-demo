const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

  devServer: {
    contentBase: path.resolve(__dirname, './public/'),
    port: 3000,
    hot: true,
  },

  devtool: 'inline-cheap-module-source map',

  mode: 'development',

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});