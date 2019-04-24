import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  </HashRouter>
);
