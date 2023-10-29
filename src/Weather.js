import Form from "./Form";
import City from "./City";
import Current from "./Current";
import Footer from "./Footer";

import "./styles.css";

export default function Weather() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Form />
            <City />
            <Current />
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
