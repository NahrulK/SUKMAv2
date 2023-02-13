import React from "react";
import vector from "../../assets/vector.png";

const Cat = (props) => (
  <>
    <div className="sukmav2__category-box">
      <h1>{props.title}</h1>
      <img
        src={props.src}
        alt={props.alt}
        className="sukmav2__category-box-img"
      />
      <img src={vector} alt="vector" className="sukmav2__category-box-vec" />
    </div>
  </>
);

export default Cat;
