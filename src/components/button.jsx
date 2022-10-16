import React from "react";

const Button = ({ actionType, styles, handleClick }) => {
  return (
    <div className="">
      <button className={styles} onClick={(e) => handleClick(e)}>
        {actionType}
      </button>
    </div>
  );
};

export default Button;
