// import dependencies
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: {
    // entry points of application
    app: './src/main.js'
  },

  output: {
    // bundle name in file system
    filename: '[name].bundle.js',
    // where to find bundle on server
    publicPath: '/',
    // where to deposit bundle on file system
    path: path.resolve(__dirname, 'dist/')
  },

  target: 'web',

  module: {
    rules: [
      {
        // load javascript file with ES6 syntax
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        // load css file as string and apply styles
        test: /.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  devServer: {
    // specify static file directory
    contentBase: path.resolve(__dirname, './public/'),
    // specify webpack-dev-server port
    port: 3000,
    // enable hot reload
    hot: true,
  },

  // display dev tools 
  devtool: 'inline-cheap-module-source map',

  plugins: [
    // display file name during hot reload
    new webpack.NamedModulesPlugin(),
    // enable HMR plugin
    new webpack.HotModuleReplacementPlugin(),
    // generate html file
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['app']
    })
  ]
}