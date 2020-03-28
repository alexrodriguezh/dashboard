import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Home from "layouts/Home.js";
import Admin from "layouts/Admin.js";
import Register from 'layouts/Register.js';
// import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/register" component={Register} />
      <Redirect from="/" to="/home/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);