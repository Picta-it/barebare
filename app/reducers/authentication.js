import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions/constants';

var initialState = {
  fetching: false,
  response: {
    token: undefined
  },
  error: undefined
};

function authentication (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return Object.assign({}, initialState, {
        fetching: true,
        error   : undefined
      });
    case LOGIN_SUCCESS:
      return {
        fetching: false,
        response: {
          token: action.data.token
        },
        error: undefined
      };
    case LOGIN_FAILURE:
      return {
        fetching: false,
        response: {
          token: undefined
        },
        error: action.data.error
      };
    case LOGOUT_SUCCESS:
      return {
        fetching: false,
        response: {
          token: undefined
        },
        error: undefined
      };
    case LOGOUT_FAILURE:
      return Object.assign({}, initialState, {
        fetching: false,
        error   : action.data.error
      });
    default:
      return state;
  }
}

export default authentication;
