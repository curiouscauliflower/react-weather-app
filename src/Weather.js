import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { MutatingDots  } from 'react-loader-spinner';
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    const iconUrlParts = response.data.condition.icon_url.split("/");
    const iconFilename = iconUrlParts[iconUrlParts.length - 1];
    const iconCode = iconFilename.replace(".png", "");
    
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      date: new Date(),
      time: new Date(response.data.time * 1000),
      icon: iconCode,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      ready: true
    });
  }

  function search() {
      const apiKey = "671758b590o71f73f4ceca7at502e7ba";
      let units = "metric";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
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
      <div className="Weather">
        <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="searchField"
              placeholder="Enter a city..."
              autoComplete="off"
            className="rounded mt-4 search-field"
            onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="rounded mt-4 ms-2 search-btn" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <p className="loader">Loading...</p>
        <MutatingDots 
          height="100"
          width="100"
          color="#fff"
          secondaryColor="#9e569a"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            display: "block",
            margin: "auto",
            padding: "50px 0 700px"
          }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  } 
}