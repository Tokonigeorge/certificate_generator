import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";

const Checkmail = ({ verify, email }) => {
  const message = "Oops. Email not registered, go back?";
  const [value, setValue] = useState("");
  const [hasDownload, setHasDownload] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   //get item from local storage and set has download
  //   setHasDownload(localStorage.getItem("name"));
  //   console.log(localStorage.getItem("name"));
  // }, [hasDownload]);

  const getDownload = () => {
    if (localStorage.getItem(`${email}`)) {
      return true;
    }
  };

  // const btnData = {
  //   actionType: "Download",
  //   styles:
  //     "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
  //   handleClick: (e) => {
  //     console.log(e);
  //   },
  // };

  const btnData = {
    actionType: "Download",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: (e) => {
      e.preventDefault();
      localStorage.setItem(`${email}`, value);
    },
  };

  const btnSubmitName = {
    actionType: "Submit",
    styles:
      "bg-blue-400 px-4 py-2 text-white rounded-sm font-semibold hover:bg-opacity-90 w-full md:w-1/2",
    handleClick: (e) => {
      if (value) {
        alert("Are you sure the detail is correct?");
        //set item in local storage when download is clicked-remove from input func
        // localStorage.setItem("name", value)
        setIsClicked(!isClicked);
      }
      //verify input value
      else {
        alert("Please enter your name");
      }
    },
  };

  const data = {
    styles:
      "ring-1 ring-blue-400 focus:outline-none focus:ring-1 focus:ring-black px-4 py-2 rounded-sm mb-4 w-full md:w-1/2",
    placeholder: "Enter your full name",
    htmlFor: "full-name",
    type: "text",
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

  const Notfound = ({ message }) => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold px-4 text-center mt-24">
          {message}
        </h2>
      </>
    );
  };

  const inputName = () => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4 text-center">
          Enter Name
        </h2>
        <p className="text-center text-lg mb-4 px-4">
          Please note this is how it will appear on the certificate and should
          be crosschecked.
        </p>
        <form className="w-screen text-center px-4 md:pd-0">
          <Input {...data} />
          <Button {...btnSubmitName} />
        </form>
      </>
    );
  };

  const HasDownload = () => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4 text-center">
          You have already generated a certificate.
        </h2>
        <p className="text-center text-lg mb-4 px-4">Download again here</p>
        <form className="w-screen text-center px-4 md:pd-0">
          <Button {...btnData} />
        </form>
      </>
    );
  };

  const DownloadCert = () => {
    return (
      <>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 px-4">
          Download Certificate here.
        </h2>
        <form className="w-screen text-center px-4 md:pd-0">
          <Button {...btnData} />
        </form>
      </>
    );
  };

  return (
    <div className="container max-auto h-auto grid place-items-center items-center mt-48">
      {verify ? (
        getDownload() ? (
          <HasDownload />
        ) : isClicked ? (
          <DownloadCert />
        ) : (
          //called as a function to prevent rerendering of input and loosing focus
          inputName()
        )
      ) : (
        <Notfound message={message} />
      )}
    </div>
  );
};

export default Checkmail;
