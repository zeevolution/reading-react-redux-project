import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Main from "../pages/Main/Main";
import Post from "../pages/Post/Post";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route
      exact
      path="/:category"
      component={Main}
      key={Math.random()
        .toString(36)
        .substr(-8)}
    />
    <Route
      exact
      path="/:category/:post_id"
      component={Post}
      key={Math.random()
        .toString(36)
        .substr(-8)}
    />
  </Switch>
);

export default Routes;
