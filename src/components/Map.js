import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import pin from '../images/pin3.png';

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 500,
        height: 500,
        latitude: 51.5173633,
        longitude: -0.0755167,
        zoom: 12
      },
      latitude: 51.5173633,
      longitude: -0.0655167
    }
  }

  // var markerCords=[
  //   // console.log(Form.state)
  //   // Form.state.coordinates[0],
  //   // Form.state.coordinates[1]

  //   51.5173633,
  //   -0.0655167
  //   // take cords state from create business profile and split
  //   //setViewport lat and long
  // ]

componentDidMount() {
  console.log("hello")
  var PostcodesIO = require('postcodesio-client');
  var postcodes = new PostcodesIO();
  postcodes.lookup('se1 2nx').then(postcode => {
    console.log(postcode);
    console.log(this.props.postcode)
  	// {
  	//   "postcode": "EC1V 9LB",
  	//   "admin_district": "Islington",
  	//   "longitude": -0.091247681768113,
  	//   "latitude": 51.5278436902703,
  	//   "region": "London",
  	//   ...
  	// }
  });
}


    render() {
      return(
        <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={"pk.eyJ1Ijoiam9zaHVhYnJvb2t1ayIsImEiOiJja2QyNW16bnMweGVmMndxbWxnMmdvcXBhIn0.fNfVGNXyTt2ytRPXkR4OmQ"}
          mapStyle = "mapbox://styles/joshuabrookuk/ckd2666eb1ha61iocgqhcmg0y"
          onViewportChange={(viewport) => {
            this.setState({viewport});
          }}
          >
          <Marker latitude={this.state.latitude} longitude={this.state.longitude}>
          <img src={pin} alt="Pin" className="center" width="27" height="43"/>
         </Marker>
        </ReactMapGL>
        <h1>The postcode is {this.props.postcode}</h1>
      </div>
      )
    }
  }

  export default Map