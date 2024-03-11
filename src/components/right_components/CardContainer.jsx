import React from "react";
import Intro from "./Intro";
import Wrapper from "./Wrapper";

function CardContainer(props) {
  return (
    <div id="card-container">
      <Intro user={props.user}/>
      <Wrapper />
    </div>
  );
}

export default CardContainer;
