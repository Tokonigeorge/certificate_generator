import React from "react";

const Button = ({ actionType, styles, handleClick }) => {
  return (
    <div className="">
      <button className={styles} onClick={() => handleClick()}>
        {actionType}
      </button>
    </div>
  );
};

export default Button;
