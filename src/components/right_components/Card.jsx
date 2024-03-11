import React from "react";

function Card(props) {
  return (
    <div id="card">
      <div id="artist-pic">
        <img src={props.url} alt="" />
      </div>
      <h3 style={{ color: "aliceblue" }}>
        <strong>{props.artistName}</strong>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
