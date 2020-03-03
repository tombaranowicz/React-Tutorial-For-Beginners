import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <Dashboard path="/" />
        <Details path="/details/:appId/:reviewId" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
