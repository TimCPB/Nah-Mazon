import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 51.505970,
    longitude: -0.120455,
    zoom: 12,
  })

  var markerCords=[
    51.505970,
    -0.120455
  ];


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
        <Marker latitude={markerCords[0]} longitude={markerCords[1]}>
        <img scr="images/location-1.1s-128px.svg" alt= "Icon"></img>
       </Marker>
      </ReactMapGL>
    </div>
  );
}
