const config = require('config');
const winston = require('winston');

const customColors = {
  silly  : 'blue',
  debug  : 'green',
  verbose: 'yellow',
  warn   : 'orange',
  error  : 'red'
};

module.exports = function () {
  winston.addColors(customColors);
  winston.level = config.log.level;

  winston.debug('Initializing server ...');
};
