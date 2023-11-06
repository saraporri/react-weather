import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="current-temp" id="current-temp">
          {Math.round(props.celsius)}°C
        </div>
        <div className="units">
          <a href="/" className="active">
            C
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="current-temp" id="current-temp">
          {Math.round(fahrenheit)}°F
        </div>
        <div className="units">
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          |F
        </div>
      </div>
    );
  }
}
