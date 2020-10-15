import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}