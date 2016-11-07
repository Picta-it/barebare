var AuthenticationSchema = require('../schemas/authentication');
var ModelBuilder = require('pi-model');
var Validator = require('pi-validator-tv4');
var Authentication = new ModelBuilder({
  'name'       : 'Authentication',
  'validator'  : new Validator(AuthenticationSchema),
  'description': ''
});

export default Authentication;
