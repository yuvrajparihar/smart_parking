import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 23.1815,
        longitude: 79.9864,
        zoom: 12
      });
    return (
        <div style={{ height: '600px', width: '100%' }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1IjoiYXRpc2hheXpuIiwiYSI6ImNraXlkbDFwajI2enUyem40dGVueHBjaTcifQ.fxrqIh5G0UPvHWU3HUen_Q'
                width="100%"
                height="100%"
                
                onViewportChange={(viewport) => setViewport(viewport)}
            >
            </ReactMapGL>
            
        </div>
    )
}

export default Map
