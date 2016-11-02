import MainDashboard from '../containers/MainDashboard';
import Login from '../containers/MainLogin';

export const createRoutes = function () {
  return ({
    path     : '/',
    component: Login
  });
};

export default createRoutes;
