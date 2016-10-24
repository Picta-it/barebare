import MainDashboard from '../containers/MainDashboard';

export const createRoutes = function () {
  return ({
    path       : '/',
    indexRoute : { onEnter: (nextState, replace) => replace('/dashboard') },
    childRoutes: [{
      path     : 'dashboard',
      component: MainDashboard
    }]
  });
};

export default createRoutes;
