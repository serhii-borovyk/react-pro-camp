import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducers";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import {BrowserRouter} from "react-router-dom";

const theme = createMuiTheme({
  palette: {type: 'dark'},
  typography: {useNextVariants: true},
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...[thunk, promise]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);