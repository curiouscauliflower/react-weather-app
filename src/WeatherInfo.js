import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="mt-4 current-location">
                <h1>
                    {props.data.city}, {props.data.country}
                </h1>
                <ul>
                    <li><FormattedDate date={props.data.date} /></li>
                    <li><FormattedTime time={props.data.time} /></li>
                </ul>
            </div>
            <div className="row mx-auto weather-row">
                <div className="col-8 col-sm-7 col-md-6 p-0">
                    <div className="d-flex current-temperature">
                        <div className="icon-container">
                            <WeatherIcon code={props.data.icon} size={156} />
                        </div>
                        <div className="content-container">
                            <div className="value">
                                <span>{Math.round(props.data.temperature)}</span>
                                <span className="units">°C</span>
                            </div>
                            <div className="text-capitalize summary">
                                {props.data.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-sm-7 col-md-6 p-0">
                    <div className="d-flex justify-content-evenly current-stats">

                        <div>
                            <div className="value">
                                <span>{Math.round(props.data.feelsLike)}</span>°
                            </div>
                            <div className="label">Feels like</div>
                            <div className="value">
                                <span>{Math.round(props.data.wind)}</span> km/h
                            </div>
                            <div className="label">Wind</div>
                        </div>

                        <div>
                            <div className="value">
                                <span>{props.data.humidity}</span>%
                            </div>
                            <div className="label">Humidity</div>
                            <div className="value">
                                <span>{Math.round(props.data.pressure)}</span>mbar
                            </div>
                            <div className="label">Pressure</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}