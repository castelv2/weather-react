import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <div>
        <a href="https://github.com/castelv2/weather-react" target="_blank">
          Open-source code
        </a>
        , by Viviana Castellanos
      </div>
    </div>
  );
}

export default App;
