import React from "react";
import FormattedDate from "./FormattedDate";

import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="col-md-12">
        <p className="main-city">{props.data.city}</p>
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="main-icon"
        />
      </div>

      <div className="row">
        <div className="datesky col-lg-12">
          <li id="today">
            <FormattedDate date={props.data.date} />
          </li>
          <strong>
            <li className="text-capitalize">{props.data.description}</li>
          </strong>
        </div>
        <div className="col-md-auto"></div>
      </div>

      <h2>
        Currently
        <div className="current-temp" id="current-temp">
          {Math.round(props.data.temperature)}
        </div>
        <div className="units">
          <a href="" id="celsius" className="active">
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
              <span id="humidity">{props.data.humidity}</span>%
            </strong>
          </li>
          <li>
            Wind:{" "}
            <strong>
              <span id="wind">{props.data.wind}</span> km/h
            </strong>
          </li>
        </div>
      </h2>
    </div>
  );
}
