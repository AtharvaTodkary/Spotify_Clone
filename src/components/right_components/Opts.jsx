import React from "react";

function Opts(props) {
  return (
    <div id="opts">
      <h4 style={{ color: "aliceblue" }}>{props.heading}</h4>
      <br />
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
        <li>{props.li4}</li>
        <li>{props.li5}</li>
      </ul>
    </div>
  );
}

export default Opts;
