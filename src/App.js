import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <Weather defaultCity="Seoul" />
        <footer>
          <a
            href="https://github.com/castelv2/weather-react"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>
          , by Viviana Castellanos
        </footer>
      </div>
    </div>
  );
}
