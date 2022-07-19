import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast" id="forecast">
      <div className="row">
        <div className="col">
          <div className="center">
            <div className="WeatherForecast-day">
              Monday
              <div />
              <WeatherIcon code="01d" size={32} />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">35° </span>
                <span className="WeatherForecast-temperature-min">15°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
