import React from "react";

function Intro(props) {
  return (
    <div id="intro">
      <h2>
        <strong>{props.user}</strong>
      </h2>
      <button>Show More</button>
    </div>
  );
}

export default Intro;