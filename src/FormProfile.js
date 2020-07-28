import React from 'react';
import { Toast } from 'react-materialize';

class FormProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      address: ''
    }
  }

  updateDetails = (e) => {
    e.preventDefault();
    console.log(this.state)

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
    this.setState({ address: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="col">

            <div style={{ padding: "10px", minHeight: "350px" }} className="card">
              <h3>Enter your business details bellow</h3>
              <form onSubmit={this.updateDetails}>
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
                    <button className='btn' type="submit">Update</button>
                </Toast>
                </div>
              </form>
            </div>
          </div>
          <div className="col s4">
            <div className="card" style={{ padding: "10px", minHeight: "378px" }}>
              <h6>Your business details</h6>
              <ul>
                <li class="collection-item avatar">
                  <i class="material-icons circle">account_circle</i>
                  <span class="title">{this.state.name}</span>
                </li>
                <li class="collection-item avatar">
                  <i class="material-icons circle">create</i>
                  <span class="title">{this.state.description}</span>
                </li>
                <li class="collection-item avatar">
                  <i class="material-icons circle">person_pin_circle</i>
                  <span class="title">{this.state.address}</span>
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
