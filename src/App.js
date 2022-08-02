import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div classsName="container">
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

export default App;
