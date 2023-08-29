import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <h3 className="mt-5 mb-4 next-5-days__title">Next 5 days</h3>
            <div className="row justify-content-center mx-auto">
                <div className="col-2 p-0">
                    <div className="mb-2">
                        <span className="next-5-days__day">Wednesday</span>
                    </div>
                        <WeatherIcon code="clear-sky-day" size={70} />
                    <div>
                        <span className="next-5-days__max-temp">30° </span>
                        <span className="next-5-days__min-temp">24°</span>
                    </div>
                </div>
                <div className="col-2 p-0">
                    <div className="mb-2">
                        <span className="next-5-days__day">Thursday</span>
                    </div>
                        <WeatherIcon code="clear-sky-day" size={70} />
                    <div>
                        <span className="next-5-days__max-temp">30° </span>
                        <span className="next-5-days__min-temp">24°</span>
                    </div>
                </div>
                <div className="col-2 p-0">
                    <div className="mb-2">
                        <span className="next-5-days__day">Friday</span>
                    </div>
                        <WeatherIcon code="clear-sky-day" size={70} />
                    <div>
                        <span className="next-5-days__max-temp">30° </span>
                        <span className="next-5-days__min-temp">24°</span>
                    </div>
                </div>
                <div className="col-2 p-0">
                    <div className="mb-2">
                        <span className="next-5-days__day">Saturday</span>
                    </div>
                        <WeatherIcon code="clear-sky-day" size={70} />
                    <div>
                        <span className="next-5-days__max-temp">30° </span>
                        <span className="next-5-days__min-temp">24°</span>
                    </div>
                </div>
                <div className="col-2 p-0">
                    <div className="mb-2">
                        <span className="next-5-days__day">Sunday</span>
                    </div>
                        <WeatherIcon code="rain-day" size={70} />
                    <div>
                        <span className="next-5-days__max-temp">30° </span>
                        <span className="next-5-days__min-temp">24°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}