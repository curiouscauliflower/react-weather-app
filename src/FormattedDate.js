import React from "react";

export default function FormattedDate(props) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
    
    let currentDay = days[props.date.getDay()];

    let currentDate = props.date.getDate();

    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentMonth = months[props.date.getMonth()];

    return (
        <div>
            <li>{currentDay}, {currentMonth} {currentDate}</li>
        </div>
    );
}