import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import VerifyEmail from "./pages/verifyEmail";
import Checkmail from "./pages/Checkmail";

function App() {
  const [value, setValue] = useState("");
  const [verify, setVerify] = useState(false);
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <VerifyEmail
            value={value}
            setValue={setValue}
            setVerify={setVerify}
          />
        </Route>
        <Route path="/checkemail">
          <Checkmail verify={verify} email={value} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
