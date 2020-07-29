import React from 'react';

class BusinessProfile extends React.Component {
  render() {
    return (

      <div>
        <p> {window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}</p>
      </div>

    )
  }
}

export default BusinessProfile
