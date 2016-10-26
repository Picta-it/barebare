const path = require('path');
const config = require('config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name              : 'client',
  target            : 'web',
  devtool           : config.compiler.devtool,
  historyApiFallback: true,
  entry             : [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(config.structure.root, 'app', 'index.js')
  ],
  output: {
    path      : path.join(config.structure.root, 'build'),
    publicPath: '/',
    filename  : 'bundle.js'
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
        presets: ['es2015', 'es2017', 'react'],
        env    : {
          development: {
            presets: ['react-hmre']
          }
        },
        plugins: [
          'transform-object-rest-spread',
          'transform-runtime',
          'transform-decorators-legacy',
          'transform-class-properties'
        ]
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
