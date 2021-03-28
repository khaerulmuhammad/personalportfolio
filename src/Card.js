import { GitHub, Launch } from "@material-ui/icons";
import React from "react";

import "./Card.css";

function Card({ src, title, description, forward }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>

        <a href="github.com" target="blank">
          <GitHub>{forward}</GitHub>
        </a>

        <a href="github.com" target="blank">
          <Launch>{forward}</Launch>
        </a>
      </div>
    </div>
  );
}

export default Card;
