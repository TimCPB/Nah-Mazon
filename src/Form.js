import React from 'react';
import { Modal, Button } from 'react-materialize';
const trigger = <Button className="btn-floating btn-large waves-effect waves-light"> <i className="material-icons">add</i></Button>;
// import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: 0,
            description: '',
            showForm: false,
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

    showForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        return (
            <div className="container center-align">
                <Modal header="Add a product" trigger={trigger} className="container center-align">
                    <div style={{ padding: "25px" }}>
                        <form onSubmit={this.mySubmittedForm}>

                            <div className="input-field col s6">
                                <input type="text" value={this.state.title} onChange={this.myChangeHandler} id="product_name" className="validate" />
                                <label htmlFor="product_name">Product Title</label>
                            </div>
                            <div className="input-field col s6">
                                <textarea value={this.state.description} onChange={this.myDescHandler} id="product_desc" className="materialize-textarea validate" />
                                <label htmlFor="product_desc">Product description</label>
                            </div>

                            <div className="input-field col s6">
                                <span className="prefix" style={{ fontSize: "20px" }}>£</span>
                                <input type="number" value={this.state.price} onChange={this.myPriceHandler} placeholder="price" id="product_price" className="validate" />
                                <label htmlFor="product_price">Product price</label>
                            </div>
                            <br />
                            <input type="submit" value="List item" className="btn" />
                        </form>
                    </div>
                </Modal>
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

        );
    }
}

export default Form
