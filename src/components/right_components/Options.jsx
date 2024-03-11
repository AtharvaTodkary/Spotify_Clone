import React from "react";
import Opts from "./Opts";

function Options() {
  return (
    <div id="options">
      <Opts heading="Company" li1="About" li2="Jobs" li3="For the Record" />
      <Opts
        heading="Communities"
        li1="For Artist"
        li2="Developers"
        li3="Advertising"
        li4="Investors"
        li5="Vendors"
      />
      <Opts heading="Useful Links" li1="Support" li2="Free Mobile App" />
    </div>
  );
}

export default Options;
