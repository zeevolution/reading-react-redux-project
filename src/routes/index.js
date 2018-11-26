import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Main from "../pages/Main/Main";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route
      exact
      path="/:id"
      component={Main}
      key={Math.random()
        .toString(36)
        .substr(-8)}
    />
  </Switch>
);

export default Routes;
