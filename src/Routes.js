import React from "react";
import Header from "./Components/Layouts/Header";
import Signin from "./Components/Authentication/Singin";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/Pages";
import "./styles/main.scss";
import LikedItems from "./Components/Pages/LikedItems";
// import Dashboard from "./Components/Pages";

const Routes = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/*    <Route path="/" component={Dashboard} /> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/likes" component={LikedItems} />
      </Switch>
    </div>
  );
};

export default Routes;
