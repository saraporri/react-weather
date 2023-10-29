import React from "react";
import "./styles.css";

export default function Current() {
  return (
    <h2>
      Currently
      <div className="current-temp" id="current-temp">
        29°
      </div>
      <div className="units">
        <a href="#" id="celsius" className="active">
          C
        </a>{" "}
        |
        <a href="#" id="fahrenheit">
          F
        </a>
      </div>
      <div className="humiwind col-lg-12">
        <li>
          Humidity:{" "}
          <strong>
            <span id="humidity"></span>%
          </strong>
        </li>
        <li>
          Wind:{" "}
          <strong>
            <span id="wind"></span> km/h
          </strong>
        </li>
      </div>
    </h2>
  );
}
