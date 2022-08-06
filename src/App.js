import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState();
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}℃</div>
      </div>
      <div className="button-container">
        <button>⇧</button>
        <button>⇩</button>
      </div>
    </div>
  );
};

export default App;