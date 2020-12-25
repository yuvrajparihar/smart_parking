import React, {useState} from 'react'
import ReactMapGL,{Marker} from 'react-map-gl';


function Map() {
    const [viewport, setViewport] = useState({
        latitude: 23.156,
        longitude: 79.959,
        zoom: 12
      });
    return (
        <div className="mapview">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1IjoiYXRpc2hheXpuIiwiYSI6ImNraXlkbDFwajI2enUyem40dGVueHBjaTcifQ.fxrqIh5G0UPvHWU3HUen_Q'
                width="100%"
                height="100%"
                
                mapStyle="mapbox://styles/atishayzn/ckizy2fvf0enk1arukum1qkaj"
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                <Marker
                >

                </Marker>
            </ReactMapGL>
            
        </div>
    )
}

export default Map
