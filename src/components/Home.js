import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return(
      <div>
      <h2><Link to="/create-profile">Business? Click here!</Link></h2>
      <p><Link to="/list-items">Customer? Click here!</Link></p>
      </div>
    )
}
}

export default Home