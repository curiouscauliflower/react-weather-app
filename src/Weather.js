import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      highTemp: 33,
      lowTemp: 32,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      ready: true
    });
  }

  if (weatherData.ready) {
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
          <li>Thursday, August 24</li>
          <li>13:23</li>
          </ul>
        </div>
      <div className="row mx-auto">
        <div className="col p-0">
          <div className="d-flex current-temperature">
            <div className="icon-container">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
              />
            </div>
            <div className="content-container">
              <div className="value">
                <span>{Math.round(weatherData.temperature)}</span>
                <span className="units">°C</span>
              </div>
              <div className="text-capitalize summary">
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
                <span>{Math.round(weatherData.feelsLike)}</span>°
              </div>
              <div className="label">Feels like</div>
              <div className="value">
                <span>{Math.round(weatherData.wind)}</span> km/h
              </div>
              <div className="label">Wind</div>
            </div>

            <div>
              <div className="value">
                <span>{weatherData.humidity}</span>%
              </div>
              <div className="label">Humidity</div>
              <div className="value">
                <span>{Math.round(weatherData.pressure)}</span>mbar
              </div>
              <div className="label">Pressure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } else {
      const apiKey = "671758b590o71f73f4ceca7at502e7ba";
      let units = "metric";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse);
    
      return <p>Loading...</p>;
  } 
}