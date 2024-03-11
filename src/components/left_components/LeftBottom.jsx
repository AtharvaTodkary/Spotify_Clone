import React from "react";
import Librar from "./Librar";
import Select from "./Select";
import Extraicons from "./Extraicons";
import AllAlbums from "./AllAlbums";

function LeftBottom() {
  return (
    <div className="lft-bottom">
      <Librar />
      <Select />
      <Extraicons />
      <AllAlbums />
    </div>
  );
}

export default LeftBottom;
