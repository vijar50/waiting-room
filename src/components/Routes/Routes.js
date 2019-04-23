import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "../Login/Login";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </HashRouter>
);
