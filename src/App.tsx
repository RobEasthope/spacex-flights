import React from "react";

import { Normalize } from "styled-normalize";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

const App = () => {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyles />
      <Routes />
    </React.Fragment>
  );
};

export default App;
