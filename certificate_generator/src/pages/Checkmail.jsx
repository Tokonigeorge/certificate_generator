import React from "react";

const Checkmail = ({ message }) => {
  const Notfound = ({ message }) => {
    return (
      <div>
        <p>Ooops, {message}</p>
      </div>
    );
  };
  const Download = ({ hasDownloaded }) => {
    return (
      <div>
        <p className="text-center text-lg mb-4 px-4"> Download here</p>
        <a href="/">Or send to mail</a>
      </div>
    );
  };
  return <div>{message ? <Notfound message={message} /> : <Download />}</div>;
};

export default Checkmail;
