import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from '../images/pin3.png';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postcode: 'S015 5JU',
      postcodelookup: {}


default function Map() {
        constructor(props) {
          super(props)
          this.state = {
            postcode: 'S015 5JU',
            postcodelookup: {}
          }
        }

  var PostcodesIO = require('postcodesio-client');
  var postcodes = new PostcodesIO();

  postcodes.lookup('SO15 5JU').then(postcode => {
  	console.log(postcode.latitude);
  });

  // console.log(postcodes.latitude)

  var markerCords=[
    // console.log(Form.state)
    // Form.state.coordinates[0],
    // Form.state.coordinates[1]

    51.5173633,
    -0.0655167
    // take cords state from create business profile and split
    //setViewport lat and long
  ];


  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle = "mapbox://styles/joshuabrookuk/ckd2666eb1ha61iocgqhcmg0y"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        >
        <Marker latitude={markerCords[0]} longitude={markerCords[1]}>
        <img src={pin} alt="Pin" className="center" width="27" height="43"/>
       </Marker>
      </ReactMapGL>
    </div>
  );
}
}

export default Map
