import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

class Barebare extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div />
      </Provider>
    );
  }
}

export default Barebare;
