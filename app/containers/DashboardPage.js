import React from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state) => state;

const mergeProps = function (stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    children: <Dashboard />
  });
};

const DashboardPage = connect(
  mapStateToProps,
  {},
  mergeProps
)(MainPage);

export default DashboardPage;
