import React from "react";
import Input from "../components/input";
import Button from "../components/button";

const VerifyEmail = () => {
  const data = {
    styles:
      "ring-1 ring-blue-400 focus:outline-none focus:ring-1 focus:ring-black px-4 py-2 rounded-sm mb-4",
    placeholder: "Enter your e-mail",
    for: "email",
    type: "email",
  };

  const btnData = {
    actionType: "Verify",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90",
  };
  return (
    <div className="container max-auto h-auto grid place-items-center items-center mt-48 px-4">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Email Verification
      </h2>
      <p className="text-center text-lg mb-4">
        Hi there, please enter your e-mail to get verified.
      </p>
      <form>
        <Input data={data} />
        <Button btnData={btnData} />
      </form>
    </div>
  );
};

export default VerifyEmail;
