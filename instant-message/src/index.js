import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDINcup-3bhTFhCS4ZfI89Fra2YSHDSP9M",
  authDomain: "instant-message-cb7c9.firebaseapp.com",
  databaseURL: "https://instant-message-cb7c9.firebaseio.com",
  projectId: "instant-message-cb7c9",
  storageBucket: "instant-message-cb7c9.appspot.com",
  messagingSenderId: "636377994668",
  appId: "1:636377994668:web:b55cb395a9d6d1b7"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
