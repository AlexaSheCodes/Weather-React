import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";
import background from "./images/galaxy.jpg";

function App() {
  return (
    <div
      className="Weather"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Weather />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
