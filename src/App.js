import React, { useState } from "react";

const App = () => {
  // state for temperature value
  const [temperatureValue, setTemperatureValue] = useState(21);
  // state for temperature colour
  const [temperatureColour, setTemperatureColour] = useState("neutral");
  
  return (
    // box containing thermometer
    <div className="app-container">
      {/* circle containing temperature value */}
      <div className="temperature-display-container">
        {/* temperature value */}
        <div className={`temperature-display ${temperatureColour}`}>{temperatureValue}℃</div>
      </div>
      {/* container for buttons to adjust temperature */}
      <div className="button-container">
        {/* buttons */}
        <button onClick={() => setTemperatureValue(temperatureValue + 1)}>⇧</button>
        <button onClick={() => setTemperatureValue(temperatureValue - 1)}>⇩</button>
      </div>
    </div>
  );
};

export default App;