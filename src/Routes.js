import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

// uses Switch component from React-Router that renders the first
// matching route that is defined with it.
// we first only have Home imported as a route, so it looks for /
// and renders Home page when matched.
// exact -> ensures it matches the route exactly
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}