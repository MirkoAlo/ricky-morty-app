import React from "react";
import Location from "../../templates/Location";
import Episode from "../../templates/Episode";
import Character from "../../templates/Character";

import "./index.scss";

const Grid = (props) => {
  return (
    <>
      {(() => {
        switch (props.filter) {
          case "character":
            return <Character />;
          case "location":
            return <Location />;
          case "episode":
            return <Episode />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Grid;
