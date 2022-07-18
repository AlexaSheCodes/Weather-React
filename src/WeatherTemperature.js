import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2 id="diffentTemp" className="temperature">
          {Math.round(props.celsius)}
        </h2>
        <h3 className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </h3>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h2 id="diffentTemp" className="temperature">
          {Math.round(fahrenheit)}
        </h2>
        <h3 className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </h3>
      </div>
    );
  }
}
