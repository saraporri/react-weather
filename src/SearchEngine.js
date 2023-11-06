import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./styles.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "8b07dt8e17fee9f438eo54a03e745179";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="search-engine">
        <form
          onSubmit={handleSubmit}
          id="enter-city"
          className="enter-city-form"
        >
          <input
            type="search"
            placeholder="Enter a city..."
            className="enter-city"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "LOADING";
  }
}
