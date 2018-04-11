const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

  output: {
    // bundle name in file system
    filename: 'bundle.js',
    // accessing bundle in server
    publicPath: '/dist/'
  },

  devServer: {
    contentBase: path.resolve(__dirname, './public/'),
    port: 3000
  },


  devtool: 'inline-cheap-module-source map',

  mode: 'development',

  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
});