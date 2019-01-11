import React from "react";

import { Normalize } from "styled-normalize";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

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
