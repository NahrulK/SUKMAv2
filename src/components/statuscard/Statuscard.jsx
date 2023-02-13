import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Statuscard = (props) => (
  <div className="sukmav2__slider-content_statuscard">
    <div className="sukmav2__slider-content_statuscard-left-arrow btn-arrow">
      <AiFillCaretLeft onClick={props.onClickPrev} />
    </div>
    <div className="sukmav2__slider-content_statuscard-status">
      <span>{props.status}</span>
    </div>
    <div className="sukmav2__slider-content_statuscard-right-arrow btn-arrow">
      <AiFillCaretRight onClick={props.onClickNext} />
    </div>
  </div>
);

export default Statuscard;
