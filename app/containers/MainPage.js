import { connect } from 'react-redux';
import Page from '../components/MainPage';

const mapStateToProps = (state) => state;


const MainPage = connect(
  mapStateToProps
)(Page);

export default MainPage;
