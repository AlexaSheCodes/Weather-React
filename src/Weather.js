import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }
  let apiKey = "959f16f94f43568286f7341b3d6b31a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
  return <Audio height="100" width="100" color="pink" ariaLabel="loading" />;
}
