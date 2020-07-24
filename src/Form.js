import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: 0,
            description: '',
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

    myDescHandler = (event) => {
        (event).preventDefault();
        this.setState({ description: event.target.value });
    }

    mySubmittedForm = (event) => {
        (event).preventDefault();
        let array = []
        array.push({
            title: this.state.title,
            price: this.state.price,
            description: this.state.description
        })
        this.setState({ list: this.state.list.concat(array), title: '', price: 0, description: '' });
    }

    render() {
        return (
            <div className="container center-align">
                <div className="card" style={{ padding: "25px" }}>
                    <form onSubmit={this.mySubmittedForm}>
                        <h3>Product Info</h3>
                        <div class="input-field col s6">
                            <input type="text" value={this.state.title} onChange={this.myChangeHandler} id="product_name" className="validate" />
                            <label for="product_name">Product Title</label>
                        </div>
                        <div class="input-field col s6">
                            <textarea value={this.state.description} onChange={this.myDescHandler} id="product_desc" className="materialize-textarea validate" />
                            <label for="product_desc">Product description</label>
                        </div>

                        <div class="input-field col s6">
                            <input type="number" value={this.state.price} onChange={this.myPriceHandler} placeholder="price" id="product_price" className="validate" />
                            <label for="product_price">Product price</label>
                        </div>
                        <br />
                        <input type="submit" value="List item" className="btn" />
                    </form>
                </div>
                <p>Product list:</p>
                <div className="row">
                    {this.state.list.map((item, index) => (
                        <div key={index} className="card col s12 m3 hoverable center-align" style={{ minHeight: "80px", marginRight: "10px" }}>
                            <div className="card-content">
                                <span className="card-title"> {item.title}</span>
                                <span>{item.description}</span>
                            </div>
                            <div className="card-action">
                                <span style={{ fontWeight: "600" }}> £{item.price}</span>

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
