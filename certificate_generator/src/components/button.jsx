import React from "react";

const Button = ({ btnData }) => {
  return (
    <div className="grid items-center">
      <button className={btnData.styles}>{btnData.actionType}</button>
    </div>
  );
};

export default Button;
