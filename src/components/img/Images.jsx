import React from "react";

const Images = ({ className = "", src }) => (
  <img src={`${src}`} className={`${className}`} />
);

export default Images;
