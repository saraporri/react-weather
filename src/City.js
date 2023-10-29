import React from "react";
import "./styles.css";

export default function City() {
  return (
    <div className="container">
      <div className="col-md-12">
        <p className="main-city" id="main-city">
          Rome
        </p>
        <img src="" className="main-icon" id="main-icon" />
      </div>

      <div className="row">
        <div className="datesky col-lg-12">
          <li id="today"></li>
          <strong>
            <li id="sky-look"></li>
          </strong>
        </div>
        <div className="col-md-auto"></div>
      </div>
    </div>
  );
}
