import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '' };
    this.mySubmittedForm = this.mySubmittedForm.bind(this);
  }

  mySubmittedForm = (event) => {
    (event).preventDefault();
    // this.props.onSubmit();
    console.log(this.state)
    this.setState({data: event.target.value});
    console.log(this.state)
  }
  render() {
    return (
      <div>    
        <form onSubmit={this.mySubmittedForm}>
          <h1>Product Info</h1>
          <input type="text"/>
        </form>
     <p>Product list: {this.state.data} </p>
      </div>
  

    );
  }
}

export default Form
