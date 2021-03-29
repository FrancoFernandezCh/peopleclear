import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import PeoplePage from "views/LoginPage/PeoplePage";
import EmpresasPage from 'views/ProfilePage/EmpresasPage'


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/personas" component={PeoplePage} />
      <Route path="/empresas" component={EmpresasPage} />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
