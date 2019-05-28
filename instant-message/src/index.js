import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(<div>Hello World!</div>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
