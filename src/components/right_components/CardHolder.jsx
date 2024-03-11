import React from "react";
import CardContainer from "./CardContainer";

function CardHolder(props) {
  return (
    <div id="card-holder">
      <CardContainer user={props.user}/>
    </div>
  );
}

export default CardHolder;
