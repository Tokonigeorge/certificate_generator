import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import VerifyEmail from "./pages/verifyEmail";
import Checkmail from "./pages/Checkmail";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={VerifyEmail} />
        <Route path="/checkemail" component={Checkmail} />
      </div>
    </Switch>
  );
}

export default App;
