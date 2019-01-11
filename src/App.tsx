import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

const history = createBrowserHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

import { Normalize } from "styled-normalize";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Normalize />
          <GlobalStyles />
          <Routes />
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
