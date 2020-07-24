import React from 'react';
import { Modal, Button, Toast } from 'react-materialize';
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
            list: [{ title: 'Table', description: 'A nice table', price: '12', id: 1 }, { title: 'Chair', description: 'A nice chair', price: '2', id: 2 }, { title: 'Hammer', description: 'A nice hammer', price: '20', id: 3 }, { title: 'Sofa', description: 'A nice sofa', price: '45', id: 4 }]
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
        let array = []
        array.push({
            title: this.state.title,
            price: this.state.price,
            description: this.state.description
        })
        this.setState({ list: this.state.list.concat(array), title: '', price: 0, description: '', showForm: false });
    }

    showForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    mySearchHandler = (e) => {
        e.preventDefault();
        this.setState({ search: e.target.value })
    }

    render() {
        return (
            <div className="container center-align">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required value={this.state.search} onChange={this.mySearchHandler} />
                        <label className="prefix" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
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
                <p>Product list:</p>
                <div className="row">
                    {this.state.list.filter(item => item.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())).map((item, index) => (
                        <div key={index} className="card col s12 m3 hoverable center-align" style={{ minHeight: "80px", marginRight: "10px", cursor: "pointer" }}>
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
