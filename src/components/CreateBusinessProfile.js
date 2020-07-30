import React from 'react';
import { Toast } from 'react-materialize';
// import axios from 'axios';
import db from '../firebase/init';
import slugify from 'slugify';

class FormProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      postcode: ''
    }
  }

  submitBusinessDetails = (e) => {
    e.preventDefault();
    var url = ""

    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:3000/'
    }

    if (process.env.NODE_ENV === 'production') {
      url = 'https://nah-mazon.web.app/'
    }

    const slug = slugify(this.state.name, {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: true
    });

    db.collection("businesses").doc().set({
      name: this.state.name,
      description: this.state.description,
      postcode: this.state.postcode,
      slug: slug
    }).then(() => {
      window.location = `${url}business-profile/${slug}`
    });


    // const business = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   postcode: this.state.postcode
    // }

    // axios.post('http://localhost:5000/items/add', item)
    // axios.post(`http://localhost:5000/businesses/add`, business).then(() => {
    //   axios.get(`http://localhost:5000/businesses`)
    //     .then((response) => {
    //       console.log(response)
    //       window.location = `${url}business-profile/${response.data[response.data.length - 1]._id}`
    //     })
    // });
  }

  setBusinessName = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value })
  }

  setBusinessDesc = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value })
  }

  setBusinessAddress = (e) => {
    e.preventDefault();
    this.setState({ postcode: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="col">

            <div style={{ padding: "10px", minHeight: "350px" }} className="card">
              <h3>Enter your business details bellow</h3>
              <form onSubmit={this.submitBusinessDetails}>
                <div className="row">
                  <div className="input-field col s6">
                    <input type="text" id="business_name" className="validate" value={this.state.name} onChange={this.setBusinessName} />
                    <label htmlFor="business_name">Business Name</label>
                  </div>

                  <div className="input-field col s6">
                    <input type="text" id="business_desc" className="validate" value={this.state.description} onChange={this.setBusinessDesc} />
                    <label htmlFor="business_desc">Business description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input type="text" id="business_address" className="validate" value={this.state.address} onChange={this.setBusinessAddress} />
                    <label htmlFor="business_addres">Business Address</label>
                  </div>
                </div>
                <div className="row">
                  <Toast
                    className="transparent z-depth-0"
                    options={{
                      html: 'Details updated!'
                    }}
                  >
                    <input className='btn' type="submit" value="update" />
                  </Toast>
                </div>
              </form>
            </div>
          </div>
          <div className="col s4">
            <div className="card" style={{ padding: "10px", minHeight: "378px" }}>
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
          </div>
        </div>

      </div>

    )
  }



}





export default FormProfile
