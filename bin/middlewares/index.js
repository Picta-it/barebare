const path = require('path');
const config = require('config');
const winston = require('winston');
const webpack = require('webpack');
const compose = require('compose-middleware').compose;
const webpackDevMiddleware = require('./webpackDev');
const webpackHotMiddleware = require('./webpackHot');
const webpackConfigPath = path.join(config.structure.config.build);
const webpackConfig = require(webpackConfigPath);
const compiler = webpack(webpackConfig);

var middlewares = [];

middlewares.push(
  webpackDevMiddleware(compiler),
  webpackHotMiddleware(compiler)
);

winston.info('Initializing middlewares ...');

module.exports = compose(middlewares);
