import React from "react";

import WeatherCard from "components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-10} condition="Drizzy" city="Paris" country="FR" />
      <WeatherCard temp={20} condition="Rain" city="Melbourne" country="AU" />
      <WeatherCard temp={40} condition="Tornado" city="London" country="GB" />
    </div>
  );
}

export default App;
