import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from '../images/pin3.png';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 51.5173633,
    longitude: -0.0755167,
    zoom: 12,
  })

  var markerCords=[
    // console.log(Form.state)
    // Form.state.coordinates[0],
    // Form.state.coordinates[1]
    51.5173633,
    -0.0655167
  ];


  return (
    <div>
    <h2>It's a map</h2><
    h3>What's your location?</h3>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle = "mapbox://styles/joshuabrookuk/ckd2666eb1ha61iocgqhcmg0y"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        >
        <Marker latitude={markerCords[0]} longitude={markerCords[1]}>
        <img src={pin} alt="Pin" class="center" width="27" height="43"/>
       </Marker>
      </ReactMapGL>
    </div>
  );
}
