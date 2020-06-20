import React, {useState, useEffect} from 'react'


function RouteDisplay(props) {
const [selectedRoute, setSelectedRoute] = useState({})

useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${props.selectedTrain}/Route`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedRoute(data);
      });
  }, [props.selectedTrain]);

  return (
    <div className="route-cards">
        <div className="start-line">
          <h3>START OF LINE</h3>
            {selectedRoute.routeSections && <p>This journey begins from: {selectedRoute.routeSections[0].originationName}</p>}
        </div>
        
        <div className="destination">
        <h3>END OF LINE</h3>
        {selectedRoute.routeSections && <p>This journey terminates at: {selectedRoute.routeSections[0].destinationName}</p>}
        </div>
    </div>
  )
}


export default RouteDisplay