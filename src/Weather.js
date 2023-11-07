import SearchEngine from "./SearchEngine";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import "./styles.css";

export default function Weather() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchEngine defaultCity="Rome" />
            <div className="weather-forecast">
              <WeatherForecast />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
