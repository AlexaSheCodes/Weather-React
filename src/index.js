import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Weather defaultCity="Mykonos" />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
