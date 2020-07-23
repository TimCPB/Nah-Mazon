import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '' };
  }

  mySummittedForm = (event) => {
    (event).preventDefault();
    this.props.onSubmit();
  }
  render() {
    return (
      <div>    
        <form method="post" onSubmit={this.mySummittedForm}>
          <h1>Product Info</h1>
          <input type="text"/>
        </form>
     <p>Product list: {this.state.data} </p>
      </div>
  

    );
  }
}

export default Form
