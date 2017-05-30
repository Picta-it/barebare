import DashboardPage from '../containers/DashboardPage';

export const createRoutes = function () {
  return ({
    path     : '/',
    component: DashboardPage
  });
};

export default createRoutes;
