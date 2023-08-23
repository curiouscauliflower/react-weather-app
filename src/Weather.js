import React from "react";
import "./Weather.css"

export default function Weather() {
  let weatherData = {
    temperature: 29,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Mostly sunny",
    highTemp: 33,
    lowTemp: 32,
    feelsLike: 32,
    wind: 1,
    humidity: 33,
    pressure: 1019
  };

    return (
      <div>
      <div className="row">
        <div className="col">
          <div className="current-temperature">
            <div className="current-temperature__icon-container">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="current-temperature__image"
              />
            </div>

            <div className="current-temperature__content-container">
              <div className="current-temperature__value">
                <span>{weatherData.temperature}</span>
                <span className="current-temperature__units">°C</span>
              </div>
              <div className="current-temperature__summary">
                {weatherData.description}
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="current-stats">
            <div>
              <div className="current-stats__value">
                <span>{weatherData.highTemp}</span>°
              </div>
              <div className="current-stats__label">High</div>
              <div className="current-stats__value">
                <span>{weatherData.lowTemp}</span>°
              </div>
              <div className="current-stats__label">Low</div>
            </div>

            <div>
              <div className="current-stats__value">
                <span>{weatherData.feelsLike}</span>°
              </div>
              <div className="current-stats__label">Feels like</div>
              <div className="current-stats__value">
                <span>{weatherData.wind}</span> km/h
              </div>
              <div className="current-stats__label">Wind</div>
            </div>

            <div>
              <div className="current-stats__value">
                <span>{weatherData.humidity}</span>%
              </div>
              <div className="current-stats__label">Humidity</div>
              <div className="current-stats__value">
                <span>{weatherData.pressure}</span>mbar
              </div>
              <div className="current-stats__label">Pressure</div>
            </div>
          </div>
        </div>
      </div>
        </div>
  );
}