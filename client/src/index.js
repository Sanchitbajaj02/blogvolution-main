import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
// import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

// Custom CSS imports
import "./Styles/index.css";
import "./Styles/footer.css";
import "./Styles/blog.css";
import "./Styles/login_signup.css";

// axios.defaults.baseURL = "http://localhost:3001/";

import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.register();
