import React, {useState, useEffect} from 'react';
import './App.css';
import LineSelector from './LineSelector'

function App() {
  const [mode, setMode] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        setMode(data);
      });
  }, []);


  function handleSelectedMode(event) {
    setSelectedMode(event.target.value);
    console.log(selectedMode);
  };

  return (
    <div className="container">
      <h1>TFL Travel Information</h1>
    <div className="selector-container">

      <select className="mode-selector" onChange={handleSelectedMode}>
        <option>Select Mode of Transport</option>
        {mode.map(modeOfTravel => {
          return (
            <option>
              {modeOfTravel.modeName}
            </option>
          );
        })}
      </select>
      <p>Your selected mode: {selectedMode}</p>
      {selectedMode && <LineSelector selectedMode={selectedMode}/>}
      </div>
      </div>
  );
}

export default App;
