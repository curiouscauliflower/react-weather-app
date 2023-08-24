import React from "react";
import "./Weather.css"

export default function Wedather() {
  let weatherData = {
    city: "Kyiv",
    country: "Ukraine",
    date: "Thursday, August 24",
    time: "13:23",
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
    <div className="Weather">
      <form>
            <input
              type="search"
              name="searchField"
              placeholder="Enter a city..."
              autocomplete="off"
              class="rounded mt-4 search-field"
            />
            <input type="submit" value="Search" className="rounded mt-4 ms-2 search-btn" />
      </form>
      <div className="mt-4 current-location">
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.time}</li>
          </ul>
        </div>
      <div className="row mx-auto">
        <div className="col p-0">
          <div className="d-flex current-temperature">
            <div className="icon-container">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="icon"
              />
            </div>
            <div className="content-container">
              <div className="value">
                <span>{weatherData.temperature}</span>
                <span className="units">°C</span>
              </div>
              <div className="summary">
                {weatherData.description}
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <div className="d-flex justify-content-around current-stats">
            <div>
              <div className="value">
                <span>{weatherData.highTemp}</span>°
              </div>
              <div className="label">High</div>
              <div className="value">
                <span>{weatherData.lowTemp}</span>°
              </div>
              <div className="label">Low</div>
            </div>

            <div>
              <div className="value">
                <span>{weatherData.feelsLike}</span>°
              </div>
              <div className="label">Feels like</div>
              <div className="value">
                <span>{weatherData.wind}</span> km/h
              </div>
              <div className="label">Wind</div>
            </div>

            <div>
              <div className="value">
                <span>{weatherData.humidity}</span>%
              </div>
              <div className="label">Humidity</div>
              <div className="value">
                <span>{weatherData.pressure}</span>mbar
              </div>
              <div className="label">Pressure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}