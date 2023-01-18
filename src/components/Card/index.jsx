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
      <div className="Card__info">
        <h5>{props.name}</h5>
        <span>{props.species}</span>
      </div>
    </div>
  );
};

export default Card;
