import React from 'react';

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
      <div className="card" style={{ padding: "15px" }}>
        <h3>Enter your business details bellow</h3>
        <form onSubmit={this.updateDetails}>
          <div className="input-field col s6">
            <input type="text" id="business_name" className="validate" value={this.state.name} onChange={this.setBusinessName} />
            <label htmlFor="business_name">Business Name</label>
          </div>

          <div className="input-field col s6">
            <input type="text" id="business_desc" className="validate" value={this.state.description} onChange={this.setBusinessDesc} />
            <label htmlFor="business_desc">Business description</label>
          </div>

          <div className="input-field col s6">
            <input type="text" id="business_address" className="validate" value={this.state.address} onChange={this.setBusinessAddress} />
            <label htmlFor="business_addres">Business Address</label>
          </div>
          <input type="submit" value="update" className="btn" />
        </form>
      </div>

    )
  }



}





export default FormProfile
