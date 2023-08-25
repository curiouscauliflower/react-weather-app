import React from "react";

export default function FormattedTime(props) {
    let currentHours = props.time.getHours();
      if (currentHours < 10) {
    currentHours = `0${currentHours}`;
    }
    
    let currentMinutes = props.time.getMinutes();
      if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
    }
    
    return <div>{currentHours}:{currentMinutes}</div>
}