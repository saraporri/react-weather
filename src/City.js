import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function City() {
  const [cityData, setCityData] = useState({ ready: false });
  function handleResponse(response) {
    setCityData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  if (cityData.ready) {
    return (
      <div className="container">
        <div className="col-md-12">
          <p className="main-city">{cityData.city}</p>
          <img
            src={cityData.iconUrl}
            alt={cityData.description}
            className="main-icon"
          />
        </div>

        <div className="row">
          <div className="datesky col-lg-12">
            <li id="today"></li>
            <strong>
              <li className="text-capitalize">{cityData.description}</li>
            </strong>
          </div>
          <div className="col-md-auto"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8b07dt8e17fee9f438eo54a03e745179";
    let city = "Rome";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "LOADING";
  }
}
