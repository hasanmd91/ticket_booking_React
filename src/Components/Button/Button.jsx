import React from "react";

const Button = ({ type, proceed, text }) => {
  return (
    <button type={type} onClick={proceed} className="secondary-btn">
      {text}
    </button>
  );
};

export default Button;
