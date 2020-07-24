import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: 0,
            list: []
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmittedForm = this.mySubmittedForm.bind(this);
    }

    myChangeHandler = (event) => {
        (event).preventDefault();
        this.setState({ title: event.target.value });
    }

    myPriceHandler = (event) => {
      (event).preventDefault();
      this.setState({ price: event.target.value });
  }

    mySubmittedForm = (event) => {
        (event).preventDefault();
        let array = []
        array.push( {
          title: this.state.title,
          price: this.state.price
        })
        this.setState({ list: this.state.list.concat(array), title: '', price: 0 });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.mySubmittedForm}>


                    <h3>Product Info</h3>
                    <input type="text" value={this.state.title} onChange={this.myChangeHandler} style={{ width: "30%" }} placeholder="product name" />
                    <input type="number" value={this.state.price} onChange={this.myPriceHandler} style={{ width: "20%", marginLeft: "10px" }} placeholder="price" />
                    <input type="submit" value="List item" className="btn" />
                </form>
                <p>Product list:</p>
                <div className="row">
                    {this.state.list.map((item, index) => (
                        <div key={index} className="card col s12 m3 hoverable center-align" style={{ minHeight: "80px", marginRight: "10px" }}>
                            <div className="card-content">
                                <span className="card-title"> {item.title}</span>
                                <span> £{item.price}</span>
                            </div>
                            <div className="card-action">
                                <span>Some more info</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            // style={{ display: this.state.visible ? "block" : "none" }}

        );
    }
}

export default Form
