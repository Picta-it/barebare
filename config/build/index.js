const path = require('path');
const config = require('config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name   : 'client',
  target : 'web',
  devtool: config.compiler.devtool,

  entry : path.join(config.structure.root, 'app'),
  output: {
    path    : path.join(config.structure.root, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    root      : config.structure.app,
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test   : /\.js$/,
      exclude: /node_modules/,
      loader : 'babel-loader', // 'babel-loader' is also a legal name to reference
      query  : {
        presets: ['es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  },
  externals: {
    // Use external version of React
    'react'      : 'React',
    'react-dom'  : 'ReactDOM',
    'redux'      : 'Redux',
    'react-redux': 'ReactRedux'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: path.join(config.structure.build, 'index.html'),
      template: path.join(config.structure.static, 'index.html'),
      hash    : true,
      favicon : path.join(config.structure.static, 'favicon.ico'),
      inject  : 'body',
      minify  : {
        collapseWhitespace: true
      }
    })
  ]
};
