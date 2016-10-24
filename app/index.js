import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo800, deepOrangeA400 } from 'material-ui/styles/colors';

import Barebare from './containers/Barebare';

injectTapEventPlugin();

/*************************************************
/* Store instanciation
*************************************************/
const store = createStore();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo800,
    accent1Color : deepOrangeA400
  }
});

/*************************************************
/* Setup mount node
*************************************************/
const MOUNT_NODE = document.getElementById('mount');

let render = () => {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Barebare store={store} />
    </MuiThemeProvider>,
    MOUNT_NODE
  );
};

render();
