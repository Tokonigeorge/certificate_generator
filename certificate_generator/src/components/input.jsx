import React from "react";

const Input = ({ data }) => {
  return (
    <div>
      <label htmlFor={data.for}></label>
      <input
        type={data.type}
        id={data.for}
        name={data.for}
        placeholder={data.placeholder}
        className={data.styles}
      />
    </div>
  );
};

export default Input;
