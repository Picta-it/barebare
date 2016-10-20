const config = require('config');
const koa = require('koa');
const initialization = require('./initialization');
const middlewares = require('./middlewares');
const winston = require('winston');

const port = config.server.port;
const host = config.server.host;

var app = koa();

initialization();

app.use(middlewares);

winston.debug('Starting server ...');

app.listen(port);

winston.debug(`Server is now running at : http://${host}:${port}`);
