import React from "react";
import ReactDOM from "react-dom";

import Controller from "./components/controller/Controller";
import Header from "./components/header/Header";

ReactDOM.render(
  <div>
    <Header />
    <Controller />
  </div>,
  document.getElementById("reactapp")
);
