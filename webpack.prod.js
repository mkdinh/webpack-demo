const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {

  output: {
    // bundle name in file system
    filename: 'bundle.js',
    // where to deposit bundle on dist
    path: path.resolve(__dirname, 'dist/static/js')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.prod.html',
      filename: '../../index.html'
    })
  ],

  mode: 'production'


})
