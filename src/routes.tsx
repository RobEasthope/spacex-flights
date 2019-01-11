import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexPage from "./pages/Home/Home";
import LaunchesPage from "./pages/Launches/Launches";

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
        <Route exact={true} path="/" component={IndexPage} />
        <Route path="/repos" component={LaunchesPage} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
