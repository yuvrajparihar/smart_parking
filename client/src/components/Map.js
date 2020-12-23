import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';


function Map() {
    const [viewport, setViewport] = useState({
        latitude: 23.156,
        longitude: 79.959,
        zoom: 12
      });
    return (
        <div style={{ height: '550px', width: '100%' }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1IjoiYXRpc2hheXpuIiwiYSI6ImNraXlkbDFwajI2enUyem40dGVueHBjaTcifQ.fxrqIh5G0UPvHWU3HUen_Q'
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/atishayzn/ckizy2fvf0enk1arukum1qkaj"
                onViewportChange={(viewport) => setViewport(viewport)}
            >
            </ReactMapGL>
            
        </div>
    )
}

export default Map
