import React from 'react';
// import axios from 'axios';
import ReactMapGL, { Marker } from 'react-map-gl';
import pin from '../images/pin3.png';
import BusinessProfileItems from '../components/BusinessProfileItems'
import db from '../firebase/init';
class BusinessProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      postcode: '',
      latitude: 0,
      longitude: 0,
      viewport: {},
      seller: {}
    }
  }

  componentDidMount() {
    const slug = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    db.collection("businesses")
      .where("slug", "==", slug)
      .get()
      .then(querySnapshot => {
        const sellers = querySnapshot.docs.map(doc => doc.data());
        console.log(sellers)
        this.setState({ seller: sellers[0] })

        var PostcodesIO = require('postcodesio-client');
        var postcodes = new PostcodesIO();
        postcodes.lookup(this.state.seller.postcode).then(returnPostcode => {
          this.setState({
            name: this.state.seller.name,
            description: this.state.seller.description,
            postcode: this.state.seller.postcode,
            latitude: returnPostcode.latitude,
            longitude: returnPostcode.longitude,
            viewport: {
              width: 500,
              height: 500,
              latitude: returnPostcode.latitude,
              longitude: returnPostcode.longitude,
              zoom: 13
            }
          })
        })
      });



    // axios.get('http://localhost:5000/businesses/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
    //   .then(response => {
    //     var PostcodesIO = require('postcodesio-client');
    //     var postcodes = new PostcodesIO();
    //     postcodes.lookup(response.data.postcode).then(returnPostcode => {
    //     this.setState({
    //       name: response.data.name,
    //       description: response.data.description,
    //       postcode: response.data.postcode,
    //       latitude: returnPostcode.latitude,
    //       longitude: returnPostcode.longitude,
    //       viewport: {
    //         width: 500,
    //         height: 500,
    //         latitude: returnPostcode.latitude,
    //         longitude: returnPostcode.longitude,
    //         zoom: 13
    //       }
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   })
  }

  render() {
    return (

      <div>
        <h6>Seller's details</h6>
        <ul>
          <li className="collection-item avatar">
            <i className="material-icons circle">account_circle</i>
            <span className="title">{this.state.name}</span>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">create</i>
            <span className="title">{this.state.description}</span>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin_circle</i>
            <span className="title">{this.state.postcode}</span>
          </li>
        </ul>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={"pk.eyJ1Ijoiam9zaHVhYnJvb2t1ayIsImEiOiJja2QyNW16bnMweGVmMndxbWxnMmdvcXBhIn0.fNfVGNXyTt2ytRPXkR4OmQ"}
          mapStyle="mapbox://styles/joshuabrookuk/ckd2666eb1ha61iocgqhcmg0y"
          onViewportChange={(viewport) => { this.setState({ viewport }); }} >
          <Marker latitude={this.state.latitude} longitude={this.state.longitude}>
            <img src={pin} alt="Pin" className="center" width="27" height="43" />
          </Marker>
        </ReactMapGL>
        <BusinessProfileItems />

      </div>

    )
  }
}

export default BusinessProfile
