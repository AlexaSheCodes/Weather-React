import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className=" WeatherInfo">
      <h1 id="h1">{props.data.city}</h1>
      <img src={props.data.icon} alt="" id="icon" width="150" />
      <h2 id="diffentTemp" className="temperature">
        {Math.round(props.data.temperature)}
      </h2>
      <h3 className="unit"> °C</h3>
      <ul>
        <li className="description" id="dayTime">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description" id="temp-description">
          {props.data.description}
        </li>
        <li className="description" id="wind">
          Wind {Math.round(props.data.wind)}
        </li>
        <li className="description" id="humidity">
          Humiduty {props.data.humidity} %
        </li>
      </ul>
    </div>
  );
}
