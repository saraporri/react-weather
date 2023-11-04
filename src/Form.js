import React from "react";

import "./styles.css";

export default function Form() {
  return (
    <form id="enter-city" className="enter-city-form">
      <input
        type="text"
        placeholder="Enter your city..."
        className="enter-city"
        autoComplete="off"
        autoFocus="on"
      />
      <input type="submit" value="Search" className="btn btn-primary" />
      <button id="current-location" className="btn btn-primary">
        Current
      </button>
    </form>
  );
}
