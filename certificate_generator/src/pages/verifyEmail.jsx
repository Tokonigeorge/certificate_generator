import React from "react";
import Input from "../components/input";
import Button from "../components/button";

const VerifyEmail = () => {
  const data = {
    styles: "",
    placeholder: "Enter your e-mail",
    for: "email",
    type: "email",
  };
  return (
    <div className="container max-auto h-auto grid place-items-center items-center mt-40">
      <h2 className="text-3xl md:text-5xl font-semibold">Email Verification</h2>
      <p>Hi there, please enter your e-mail to get verified</p>
      <form>
        <Input data={data} />
        <Button actionType="Verify" />
      </form>
    </div>
  );
};

export default VerifyEmail;
