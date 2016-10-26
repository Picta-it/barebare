const webpackDevMiddleware = require('webpack-dev-middleware');

const middlewareConfig = {
  publicPath: '/',
  filename  : 'bundle.js',
  hot       : true,
  quiet     : false,
  noInfo    : false,
  lazy      : false,
  stats     : {
    chunks      : false,
    chunkModules: false,
    colors      : true
  }
};

module.exports = (compiler) => webpackDevMiddleware(compiler, middlewareConfig);
