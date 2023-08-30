import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

     useEffect(() => {
    setLoaded(false);
     }, [props.city]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <h3 className="mt-5 mb-4 ms-5 next-6-days__title">Next 6 days</h3>
                <div className="row justify-content-center">
                    {forecast.map(function (dailyForecast, index) {
                        if (index > 0 && index < 7) {
                            return (
                                <div className="col-2 p-0" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            ); 
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let apiKey = "671758b590o71f73f4ceca7at502e7ba";
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&&key=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}