import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./HomePage";

const Dashboard = () => {
  return (
    <div>
      <Switch>
        {/*<Route exact path="/dashboard/products" component={Homepage} /> */}
      </Switch>
    </div>
  );
};

export default Dashboard;
