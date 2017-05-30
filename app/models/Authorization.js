import Basis from './Basis';

let fakeResult = { token: 'pouet pouet' };
let fakeError = { error: 'L\'authentification a echoué' };

export default class AuthorizationModel extends Basis {
  create () {
    let deferred = new Promise((resolve, reject) => {
      if (this.username) {
        setTimeout(resolve, 0, fakeResult);
      } else {
        setTimeout(reject, 0, fakeError);
      }
    });

    return deferred;
  }
}
