import React from "react";

const Input = ({
  styles,
  htmlFor,
  type,
  placeholder,
  value,
  handleKeyDown,
  handleChange,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}></label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        className={styles}
        value={value}
        required
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default Input;
