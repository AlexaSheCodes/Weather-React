import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="h1">{props.data.city}</h1>
      <div className="float-left">
        <WeatherIcon id="props.icon" code={props.data.icon} size={95} />
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
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
