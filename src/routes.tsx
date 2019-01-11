import React from "react";
import { Route, Switch } from "react-router-dom";

import CoresPage from "./pages/Cores/Cores";
import DragonsPage from "./pages/Dragons/Dragons";
import HomePage from "./pages/Home/Home";
import LaunchesPage from "./pages/Launches/Launches";
import NextLaunchPage from "./pages/NextLaunch/NextLaunch";
import NoMatch from "./pages/NoMatch/NoMatch";
import RoadsterPage from "./pages/Roadster/Roadster";
import RocketsPage from "./pages/Rockets/Rockets";

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/launches" component={LaunchesPage} />
        <Route path="/rockets" component={RocketsPage} />
        <Route path="/dragons" component={DragonsPage} />
        <Route path="/cores" component={CoresPage} />
        <Route path="/next-launch" component={NextLaunchPage} />
        <Route path="/roadster" component={RoadsterPage} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
