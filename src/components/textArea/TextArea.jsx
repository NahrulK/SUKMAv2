import React from "react";

const TextArea = ({ className = "", ...props }) => (
  <textarea
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={`${className}`}
  />
);

export default TextArea;
