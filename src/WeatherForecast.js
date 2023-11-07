import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = "8b07dt8e17fee9f438eo54a03e745179";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric
`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">day</div>
          <WeatherIcon code="snow-day" size={50} />{" "}
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
