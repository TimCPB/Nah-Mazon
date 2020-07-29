import React from 'react';
import CreateBusinessProfile from './CreateBusinessProfile';

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      postcode: '',
    }
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
