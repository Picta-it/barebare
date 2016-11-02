import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Barebare from './containers/Barebare';
import barebareApp from './reducers';
import routes from './routes/index';

import styles from './styles/main.scss';

injectTapEventPlugin();

/*************************************************
/* Store instanciation
*************************************************/

const store = createStore(barebareApp);

/*************************************************
/* Setup mount node
*************************************************/
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Barebare store={store} routes={routes()} />,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Setup hot module replacement
  module.hot.accept('./routes/index', () => {
    return setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}

render();
