import React, {useState, useEffect} from 'react'
import RouteDisplay from './RouteDisplay'


function LineSelector(props) {
const [lines, setLines] = useState([])
const [selectedTrain, setSelectedTrain] = useState([])

useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selectedMode}`)
      .then((res) => res.json())
      .then((data) => {
        setLines(data);
      });
  }, [props.selectedMode]);

  function handleSelectedTrain(event) {
      console.log(selectedTrain)
    setSelectedTrain(event.target.value);
  };

  return (
    <div>

    <select className="line-selector" onChange={handleSelectedTrain}>

      <option>Choose a Line...</option>
      {lines.map(lineName => {
        return (
          <option>
            {lineName.id}
          </option>
        );
      })}
    </select>
    <RouteDisplay selectedTrain={selectedTrain}/>
    </div>
  )
}


export default LineSelector