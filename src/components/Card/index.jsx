import React from "react";

import "./index.scss";
const Card = (props) => {
  return (
    <div className="Card">
      <div className="Card__status">
        <span className={props.status}>{props.status}</span>
      </div>
      <div className="Card__media">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="Card__name">
        <h5>{props.name}</h5>
      </div>

      <div className="Card__location">
        <div className="Card__location-label"></div>
        <div className="Card__location-name"></div>
      </div>
    </div>
  );
};

export default Card;
