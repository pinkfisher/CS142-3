import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import "./p5.css";
import Header from "./components/header/Header";
import States from "./components/states/States";
import Example from "./components/example/Example";

ReactDOM.render(
  <HashRouter>
    <div>
      <Header />
      <div className="bar">
        <Link to="/states" className="barButton">
          States
        </Link>
        <Link to="/example" className="barButton">
          Example
        </Link>
      </div>
      <Route path="/states" component={States} />
      <Route path="/example" component={Example} />
    </div>
  </HashRouter>,
  document.getElementById("reactapp")
);
