const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    app: "./src/main.js"
  },

  output: {
    // bundle name in file system
    filename: 'bundle.js',
    // accessing bundle in server
    publicPath: '/dist',
    // where to deposit bundle on dist
    path: path.resolve(__dirname, 'dist/static/js')
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
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}