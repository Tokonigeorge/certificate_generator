import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import VerifyEmail from "./pages/verifyEmail";
import Checkmail from "./pages/Checkmail";

function App() {
  const [value, setValue] = useState("");
  const [verify, setVerify] = useState(false);
  return (
    <Routes>
          <Route exact path="/" element={<VerifyEmail
              value={value}
              setValue={setValue}
              setVerify={setVerify}
            />}>
            
          </Route>
          <Route path="/checkemail" element={ <Checkmail email={value} verify={verify} />}>
           
          </Route>
    </Routes>
  );
}

export default App;
