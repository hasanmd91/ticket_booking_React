import React from "react";

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.proceed} className="secondary-btn">
      {props.text}
    </button>
  );
};

export default Button;
