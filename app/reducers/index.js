import { combineReducers } from 'redux';
import authentication from './authentication';

const barebareApp = combineReducers({
  authentication
});

export default barebareApp;
