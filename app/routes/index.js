import MainPage from '../containers/MainPage';
import Login from '../containers/MainLogin';

export const createRoutes = function () {
  return ({
    path     : '/',
    component: MainPage
  });
};

export default createRoutes;
