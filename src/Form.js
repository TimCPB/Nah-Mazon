import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: '',
      visible: false
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    (event).preventDefault();
    console.log(this.state)
    this.setState({data: event.target.value});
    console.log(this.state)
  }

  mySubmittedForm = (event) => {
    (event).preventDefault();
    this.setState({visible: true});
  }

  render() {
    return (
      <div>    
        <form onSubmit={this.mySubmittedForm}>
          <h1>Product Info</h1>
          <input type="text" value={this.state.data} onChange={this.myChangeHandler} />
        <input type="submit" value="Submit" />
        </form>
     <p style = {{display: this.state.visible ? "block" : "none"}}>Product list: {this.state.data} </p>
      </div>
  

    );
  }
}

export default Form
