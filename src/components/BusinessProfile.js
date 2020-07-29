import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router";

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      postcode: '',
    }
  }

  componentDidMount() {
    // console.log(window)
    // const { match: { params } } = this.props;
    axios.get('http://localhost:5000/businesses/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
      .then(response => {
        this.setState({
          name: response.data.name,
          description: response.data.description,
          postcode: response.data.postcode
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  render() {
    return (

      <div>
        <h6>Your business details</h6>
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
      </div>
      <div>
        <ListBusinessItems 
      </div>

    )
  }
}

export default BusinessProfile
