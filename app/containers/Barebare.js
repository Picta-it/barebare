import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';

class Barebare extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { routes, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    );
  }
}

export default Barebare;
