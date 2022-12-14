import React, { useState } from "react";

const App = () => {
  // state for temperature value
  const [temperatureValue, setTemperatureValue] = useState(21);
  // state for temperature colour
  const [temperatureColour, setTemperatureColour] = useState("hot");

  // Function to control increasing Temperature
  const increaseTemperature = function () {
    // set max temperatureValue limit
    if (temperatureValue === 32) {
      alert("temperature is too high!");
      return
    }

    // Increase temperatureValue by one
    const newTemp = temperatureValue + 1;

    // Set temperature colour depending on temperature value
    if (newTemp >= 26) {
      setTemperatureColour('hot');
    } else if (newTemp >= 18 && newTemp <= 25) {
      setTemperatureColour('warm');
    } else if (newTemp >= 1 && newTemp <= 17) {
      setTemperatureColour('cool');
    } else if (newTemp <= 0) {
      setTemperatureColour('cold');
    }

    // Set the temperature value to the new value
    setTemperatureValue(newTemp);
  }

    // Function to control decrease Temperature
    const decreaseTemperature = function () {
    // set min temperatureValue limit
    if (temperatureValue === -10) {
      alert("temperature is too low!");
      return
    }
      
      const newTemp = temperatureValue - 1;
  
      if (newTemp >= 28) {
        setTemperatureColour('hot');
      } else if (newTemp >= 18 && newTemp <= 27) {
        setTemperatureColour('warm');
      } else if (newTemp >= 1 && newTemp <= 17) {
        setTemperatureColour('cool');
      } else if (newTemp <= 0) {
        setTemperatureColour('cold');
      }
  
      setTemperatureValue(newTemp);
    }

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
        <button onClick={() => increaseTemperature()}>⇧</button>
        <button onClick={() => decreaseTemperature()}>⇩</button>
      </div>
    </div>
  );
};

export default App;