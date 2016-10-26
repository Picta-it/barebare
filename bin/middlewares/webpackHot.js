const webpackHotMiddleware = require('webpack-hot-middleware');
const middlewareConfig = {
  log      : console.log,
  path     : '/__webpack_hmr',
  heartbeat: 1 * 1000
};

module.exports = (compiler) => webpackHotMiddleware(compiler, middlewareConfig);
