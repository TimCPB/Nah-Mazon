import React from 'react';
import db from '../firebase/init';
// import axios from 'axios';

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

    render() {
        return (
            <div>
                <div className="row">
                    <h4>My listed products</h4>
                    {this.state.list.map((item, index) => (
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
