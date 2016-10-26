import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo800, deepOrangeA400 } from 'material-ui/styles/colors';

import Barebare from './containers/Barebare';
import barebareApp from './reducers';
import routes from './routes/index';

injectTapEventPlugin();

/*************************************************
/* Store instanciation
*************************************************/

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo800,
    accent1Color : deepOrangeA400
  }
});

const store = createStore(barebareApp);

/*************************************************
/* Setup mount node
*************************************************/
const MOUNT_NODE = document.getElementById('mount');

let render = () => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Barebare store={store} routes={routes()} />
    </MuiThemeProvider>,
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
