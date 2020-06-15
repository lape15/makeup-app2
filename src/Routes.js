import React from "react";
import Signin from "./Components/Authentication/Singin";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Pages/HomePage";
// import Dashboard from "./Components/Pages";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/sign-in" component={Signin} />
        {/*    <Route path="/" component={Dashboard} /> */}
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default Routes;
