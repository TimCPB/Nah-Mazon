import React from 'react';
import { Modal, Button, Toast } from 'react-materialize';
// import axios from 'axios';
import db from '../firebase/init';
const trigger = <Button className="btn-floating btn-large waves-effect waves-light"> <i className="material-icons">add</i></Button>;

class CreateItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: 0,
            description: '',
            showForm: false,
            search: '',
            business: {}
        };
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

        db.collection("items").doc().set({
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            businessName: this.props.business.name,
            businessID: this.props.business.slug
        })

        // const item = {

        //     title: this.state.title,
        //     description: this.state.description,
        //     price: this.state.price,
        //     businessName: this.props.business.name,
        //     businessID: this.props.business._id
        // }

        // console.log(item)

        // axios.post('http://localhost:5000/items/add', item)

        this.setState({
            title: '',
            description: '',
            price: 0
        })
    }

    render() {
        return (
            <div className="container center-align">
                <Modal header="Add a product" trigger={trigger} className="container center-align" open={this.state.showForm}>
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
                            <Toast
                                className="transparent z-depth-0"
                                options={{
                                    html: 'Item listed!'
                                }}
                            >
                                <input type="submit" value="List item" className="btn" />
                            </Toast>
                        </form>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default CreateItem
