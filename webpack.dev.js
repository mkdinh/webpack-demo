const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    // publicPath: 'http://localhost:3000/dist',
    // filename: 'bundle.js',//--------------------------------------------------------
    port: 3000
  },

  devtool: 'inline-cheap-module-source map',


  mode: 'development'
});