import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">day</div>
            <WeatherIcon code={forecast[0].condition[0].icon} size={50} />{" "}
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {forecast.temperature.maximum}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast.temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8b07dt8e17fee9f438eo54a03e745179";
    let longitude = "props.coordinates.longitude";
    let latitude = "props.coordinates.latitude";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
