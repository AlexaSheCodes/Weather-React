import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div class="container">
          <form id="search-form">
            <input
              type="text"
              placeholder="Enter your city"
              autocomplete="off"
              autofocus="on"
              id="search-text-input"
            />
            <input type="submit" value="🔍 Search" />
            <input type="submit" id="pin" value="📍Current" />
          </form>
          <h1 id="h1">{weatherData.city}</h1>
          <img src={weatherData.icon} alt="" id="icon" width="150" />
          <h2 id="diffentTemp" className="temperature">
            {Math.round(weatherData.temperature)}
          </h2>
          <h3 className="unit"> °C</h3>
          <ul>
            <li className="description" id="dayTime">
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="description" id="temp-description">
              {weatherData.description}
            </li>
            <li className="description" id="wind">
              Wind {Math.round(weatherData.wind)}
            </li>
            <li className="description" id="humidity">
              Humiduty {weatherData.humidity} %
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "959f16f94f43568286f7341b3d6b31a5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
