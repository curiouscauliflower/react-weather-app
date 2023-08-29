import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let maxTemp = Math.round(props.data.temperature.maximum);
        return maxTemp;
    }

    function minTemperature() {
        let minTemp = Math.round(props.data.temperature.minimum);
        return minTemp;
    }

    function showDay() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="mb-2">
                <span className="next-5-days__day">{showDay()}</span>
            </div>
            <WeatherIcon code={props.data.condition.icon} size={70} />
            <div>
                <span className="next-5-days__max-temp">{maxTemperature()}° </span>
                <span className="next-5-days__min-temp">{minTemperature()}°</span>
            </div>
        </div>
    );
}