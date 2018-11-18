import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Main from "../pages/Main/Main";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default Routes;
