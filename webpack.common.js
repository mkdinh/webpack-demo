const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    app: "./src/main.js"
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}