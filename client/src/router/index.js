import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
      </Switch>
    </Router>
  );
}
