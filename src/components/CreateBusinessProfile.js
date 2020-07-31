import React from 'react';
import { Toast } from 'react-materialize';
// import axios from 'axios';
import db from '../firebase/init';

class FormProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      postcode: '',
    }
  }

  submitBusinessDetails = (e) => {
    e.preventDefault();

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

    // axios.post('http://localhost:5000/businesses/add', business).then(() => {
    //   axios.get('http://localhost:5000/businesses')
    //     .then((response) => {
    //       window.location = `http://localhost:3000/business-profile/${response.data[response.data.length - 1]._id}`
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
      <div className="container">
        <div className="row">
          <h3>New to Nah'mazon ?</h3>
          <div className="col">

            <div style={{ padding: "20px", minHeight: "350px" }} className="card">
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
                    <input className='btn' type="submit" value="Create profile" />
                  </Toast>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>

    )
  }



}





export default FormProfile
