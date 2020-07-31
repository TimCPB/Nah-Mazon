import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className='container centre-align'>
        <div className='row' style={{ marginLeft: "25%" }}>
          <div className='col'>
            <button className='btn'>
              <Link className='white-text' to='/create-profile'>
                Business Hub
							</Link>
            </button>
          </div>
          <div className='col'>
            <button className='btn'>
              <Link className='white-text' to='/list-items'>
                Customer Hub
							</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;