import React from "react";
import Signin from "./Components/Authentication/Singin";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Pages";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;
