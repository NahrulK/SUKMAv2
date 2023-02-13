import React from "react";

const Slideaction = (props) => (
  <div class="sukmav2__slider-content_action">
    <button
      onClick={props.onClickPrev}
      class="sukmav2__slider-content_action-prev btn-action"
    >
      Prev
    </button>
    <button
      onClick={props.onClickFav}
      class="sukmav2__slider-content_action-fav btn-action"
    >
      FAVORITE {props.heart}
    </button>
    <button
      onClick={props.onClickNext}
      class="sukmav2__slider-content_action-next btn-action"
    >
      Next
    </button>
  </div>
);

export default Slideaction;
