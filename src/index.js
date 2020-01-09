import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import Reservation from "views/LandingPage/LandingPage.js";
import Commande from "views/LandingPage/Commande.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/reservation" component={Reservation} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/commande" component={Commande} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
