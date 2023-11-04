import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Current() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <h2>
        Currently
        <div className="current-temp" id="current-temp">
          {Math.round(weatherData.temperature)}
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
              <span id="humidity">{weatherData.humidity}</span>%
            </strong>
          </li>
          <li>
            Wind:{" "}
            <strong>
              <span id="wind">{weatherData.wind}</span> km/h
            </strong>
          </li>
        </div>
      </h2>
    );
  } else {
    const apiKey = "8b07dt8e17fee9f438eo54a03e745179";
    let city = "Rome";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "LOADING";
  }
}
