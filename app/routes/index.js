import MainDashboard from '../containers/MainDashboard';

export const createRoutes = function () {
  return ({
    path     : '/',
    component: MainDashboard
  });
};

export default createRoutes;
