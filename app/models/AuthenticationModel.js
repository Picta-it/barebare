import { ActiveRecordBasisModel } from './BasisModel';
var ModelBuilder = require('pi-model'),
    User         = new ModelBuilder({
      'name' : 'UserModel'
    });

export default class AuthenticationModel extends ActiveRecordBasisModel {
  constructor (credentials) {
    super();

    this.username = credentials.username;
    this.password = credentials.password;
  }

  create () {

    return deferred;
  }
}
