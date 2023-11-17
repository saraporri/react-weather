import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="col-md-12">
        <p className="main-city">{props.data.city}</p>
        <WeatherIcon code={props.data.icon} size={90} />
      </div>
      <div className="row">
        <div className="datesky col-lg-6">
          <li id="today">
            <FormattedDate date={props.data.date} />
          </li>
          <strong>
            <li className="text-capitalize">{props.data.description}</li>
          </strong>
        </div>

        <div className="col-md-auto">
          <img
            src="https://media.tenor.com/-xDmnwIkR8AAAAAi/ffxiv-pusheen.gif"
            className="kitty-img"
            alt="kitty"
            width={120}
          />
        </div>
      </div>

      <h2>
        Currently
        <WeatherTemperature celsius={props.data.temperature} />
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
              <span id="wind">{Math.round(props.data.wind)}</span> km/h
            </strong>
          </li>
        </div>
      </h2>
    </div>
  );
}
