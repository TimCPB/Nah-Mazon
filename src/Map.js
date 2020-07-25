import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 51.505970,
    longitude: -0.120455,
    zoom: 12,
  })


  return (
    <div>
    <h3>It's a map</h3>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle = "mapbox://styles/joshuabrookuk/ckd2666eb1ha61iocgqhcmg0y"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        >
      </ReactMapGL>
    </div>
  );
}
