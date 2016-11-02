import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = function (state) {
  return state;
};

const MainLogin = connect(
  mapStateToProps
)(Login);

export default MainLogin;
