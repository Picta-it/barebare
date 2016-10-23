const path = require('path');
const config = require('config');
const winston = require('winston');
const compose = require('koa-compose');
const webpackDevServer = require('koa-webpack-dev');

var middlewares = [];
var webpackConfig = path.join(config.structure.config.build);

winston.info('Initializing middlewares ...');

middlewares.push(webpackDevServer({ config: webpackConfig }));

module.exports = compose(middlewares);
