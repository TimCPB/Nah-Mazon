import React from 'react';
import axios from 'axios';
import db from '../firebase/init';

class ListProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
            search: '',
            list: []
        }
    }

    componentDidUpdate() {

        const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        db.collection("items")
            .where("businessID", "==", id)
            .get()
            .then(querySnapshot => {
                const items = querySnapshot.docs.map(doc => doc.data());
                this.setState({ list: items })
            });

        // axios.get('http://localhost:5000/items/')
        //     .then(response => {
        //         var id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

        //         var myItems = response.data.filter((item) => {
        //             return item.businessID === id
        //         })

        //         this.setState({ list: myItems })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }

    mySearchHandler = (e) => {
        e.preventDefault();
        this.setState({ search: e.target.value }
        )
    }

    sortByPrice = (e) => {
        e.preventDefault();
        this.toggle()
        var sortedList = []
        if (this.state.toggle) {
            sortedList = this.state.list.sort((product1, product2) => product1.price - product2.price)
        }
        else {
            sortedList = this.state.list.sort((product1, product2) => product2.price - product1.price)
        }
        this.setState({ list: sortedList })
    }

    toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required value={this.state.search} onChange={this.mySearchHandler} />
                        <label className="prefix" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
                <p>Product list:</p>
                <button className="btn" type="button" onClick={this.sortByPrice}> sort by price </button>
                <div className="row">
                    {this.state.list.filter(item => item.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())).map((item, index) => (
                        <div key={index} className="card col s12 m3 hoverable center-align" style={{ minHeight: "80px", marginRight: "10px", cursor: "pointer" }}>
                            <div className="card-content">
                                <span className="card-title"> {item.title}</span>
                                <span>{item.description}</span>
                                <span style={{ fontWeight: "600" }}>{item.businessName}</span>
                            </div>
                            <div className="card-action">
                                <span style={{ fontWeight: "600" }}> £{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ListProducts
