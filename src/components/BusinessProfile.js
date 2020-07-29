import React from 'react';
import axios from 'axios';
import CreateItem from './CreateItem';
// import BusinessProfileItems from './BusinessProfileItems';

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      business: {}
    }
  }
  componentDidMount() {

    axios.get('http://localhost:5000/businesses/')
      .then(response => {
        var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        var getBusiness = response.data.find(business => {
          return business._id === id
        })
        this.setState({ business: getBusiness })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (

      <div>
        <div className="row">
          <div className="col l12 m12 s12">
            <div className="row">
              <div className="col s12">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src="https://pixabay.com/get/57e4dd474a53af14f6d1867dda35367b1c39dee754597140_1920.png" alt="" style={{ maxHeight: "350px" }}></img>
                    <span className="card-title" style={{ fontWeight: "600" }}>My Profile</span>
                  </div>
                  <div className="card-content">
                    <div className="row">
                      <div className="col s4">
                        <i className="material-icons large teal-text">account_circle</i>
                        <span className="card-title black-text" style={{ fontWeight: "600" }}>{this.state.business.name}</span>
                      </div>
                      <div className="col s4 left-align">
                        <p style={{ fontSize: "20px" }}><i className="material-icons teal-text" style={{ verticalAlign: "bottom" }}>location_on</i> {this.state.business.postcode}</p>
                        <p style={{ fontSize: "20px" }}><i className="material-icons teal-text" style={{ verticalAlign: "bottom" }}>info</i> {this.state.business.description}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p> {window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}</p>
        <CreateItem business={this.state.business} />
      </div>

    )
  }
}

export default BusinessProfile
