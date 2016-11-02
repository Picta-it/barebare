const express = require('express');
const app = express();
const config = require('config');
require('./initialization')();
const middlewares = require('./middlewares');
const winston = require('winston');

const port = config.server.port;
const host = config.server.host;

app.use(middlewares);
app.use('/static', express.static(config.structure.static));

winston.info('Starting server ...');

app.listen(port);

winston.info(`Server is now running at : http://${host}:${port}`);
