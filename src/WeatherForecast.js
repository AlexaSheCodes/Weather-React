import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast" id="forecast">
      <div className="center" />
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            Monday
            <div />
            <p>
              <WeatherIcon code="01d" />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">35 /</span>
                <span className="WeatherForecast-temperature-min">15</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
