import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./images/galaxy.jpg";

export default function Weather() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        padding: "100px",
      }}
    >
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
        <h1 id="h1">Athens</h1>
        <h2 id="diffentTemp">35 </h2>
        <h3> </h3>
        <ul>
          <li className="description" id="dayTime">
            Saturday, 15:38
          </li>
          <li className="description" id="temp-description">
            Sunny ☀️
          </li>
          <li className="description" id="wind">
            Wind 20 km/h
          </li>
          <li className="description" id="humidity">
            Humiduty 38%
          </li>
        </ul>
      </div>
    </div>
  );
}
