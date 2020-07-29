import React from 'react';
import CreateBusinessProfile from './CreateBusinessProfile';

class BusinessProfile extends React.Component {
  super(props)
  this.state = {
    name: "Lamp shop",
    postcode: '',
    list: []
  }


  render() {
    return (

      <div>
        <h1>BusinessProfile page made with a component</h1>
        <CreateBusinessProfile />
      </div>

    )
  }
}

export default BusinessProfile
