import React from "react";

const Input = ({ className = "", ...props }) => (
  <input
    id={props.id}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={`${className}`}
  />
);

export default Input;
