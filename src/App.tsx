import * as React from "react";
import { connect } from "react-redux";

import Routes from "./routes";
import { ApplicationState } from "./store";

import GlobalStyles from "./styles/GlobalStyles";
import { Normalize } from "styled-normalize";

const App = () => {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Routes />
    </div>
  );
};

export default App;
