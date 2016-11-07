'use strict';

import AuthenticationModel from '../../../app/models/Authentication';

describe('AuthenticationModel', function () {
  describe('instanciation', function () {
    it('should throw on empty instanciation', function () {
      var model;

      expect(function () {
        model = new AuthenticationModel();
      }).toThrow(Error);

      expect(typeof model).not.toEqual('object');
    });

    it('should throw on login/pass instanciation without kind', function () {
      var model;

      expect(function () {
        model = new AuthenticationModel({
          credentials: {
            'username': 'foo',
            'password': 'foo'
          }
        });

        expect(typeof model).toEqual('object');
      }).toThrow(Error);
    });

    it('should throw on token instanciation without kind', function () {
      var model;

      expect(function () {
        model = new AuthenticationModel({
          credentials: {
            'token': 'foo'
          }
        });

        expect(typeof model).toEqual('object');
      }).toThrow(Error);
    });

    it('should not throw on login/pass instanciation', function () {
      var model;

      expect(function () {
        model = new AuthenticationModel({
          credentials: {
            'kind'    : 'raw',
            'username': 'foo',
            'password': 'foo'
          }
        });
      }).not.toThrow(Error);

      expect(typeof model).toEqual('object');
    });

    it('should not throw on token instanciation', function () {
      var model;

      expect(function () {
        model = new AuthenticationModel({
          credentials: {
            'kind' : 'cookie',
            'token': 'foo'
          }
        });
      }).not.toThrow(Error);

      expect(typeof model).toEqual('object');
    });
  });
});
