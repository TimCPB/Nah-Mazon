import React from 'react';
import { Modal, Button, Toast } from 'react-materialize';
import axios from 'axios';
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
            search: '',
            // list: [{ title: 'Table', description: 'A nice table', price: '12', id: 1 }, { title: 'Chair', description: 'A nice chair', price: '2', id: 2 }, { title: 'Hammer', description: 'A nice hammer', price: '20', id: 3 }, { title: 'Sofa', description: 'A nice sofa', price: '45', id: 4 }]
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
        // let array = []
        // array.push({
        //     title: this.state.title,
        //     price: this.state.price,
        //     description: this.state.description
        // })

        // this.setState({ list: this.state.list.concat(array), title: '', price: 0, description: '', showForm: false });

        const item = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
        }

        axios.post('http://localhost:5000/items/add', item)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            description: '',
            price: 0
        })
    }


    showForm = () => {
        this.setState({ showForm: !this.state.showForm })
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

export default Form
