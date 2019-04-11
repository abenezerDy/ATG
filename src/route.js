import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./js/containers/index";
import GameDetail from "./js/containers/gameDetail";

function Index() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game/:id" exact component={GameDetail} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
