import React, { useState } from "react";
import Input from "../components/input";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { emails } from "../../data";
import Button from "../components/button";
import Checkmail from "./Checkmail";

const VerifyEmail = ({ value, setValue, setVerify }) => {
  const verifyEmail = (e) => {
    if (
      value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      if (value.length > 0) setVerify(emails.includes(value));
    } else {
      e.preventDefault();
      alert("Invalid email address");
    }
  };
  const data = {
    styles:
      "ring-1 ring-blue-400 focus:outline-none focus:ring-1 focus:ring-black px-4 py-2 rounded-sm mb-4 w-full md:w-1/2",
    placeholder: "Enter your e-mail",
    htmlFor: "email",
    type: "email",
    value: value,
    handleKeyDown: (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    },
    handleChange: (e) => {
      setValue(e.target.value);
    },
  };

  const btnData = {
    actionType: "Verify",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: (e) => {
      verifyEmail(e);
    },
  };

  return (
    <div className="container max-auto h-auto grid place-items-center items-center mt-48">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4">
        Email Verification
      </h2>
      <p className="text-center text-lg mb-4 px-4">
        Hi there, please enter your e-mail to get verified.
      </p>
      <form className="w-screen text-center px-4 md:pd-0">
        <Input {...data} />
        <Link to="/checkemail">
          <Button {...btnData} />
        </Link>
      </form>
    </div>
  );
};

export default VerifyEmail;
