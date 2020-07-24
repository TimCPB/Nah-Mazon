import React from 'react';
// import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            list: []
        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmittedForm = this.mySubmittedForm.bind(this);
    }

    myChangeHandler = (event) => {
        (event).preventDefault();
        this.setState({ data: event.target.value });
    }

    mySubmittedForm = (event) => {
        (event).preventDefault();
        let array = []
        array.push(this.state.data)
        this.setState({ list: this.state.list.concat(array), data: '' });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.mySubmittedForm}>


                    <h3>Product Info</h3>
                    <input type="text" value={this.state.data} onChange={this.myChangeHandler} style={{ width: "30%" }} placeholder="product name" />
                    <input type="submit" value="List item" className="btn" />
                </form>
                <p>Product list:</p>
                <div className="row">
                    {this.state.list.map((item, index) => (
                        <div key={index} className="card col s12 m3 hoverable center-align" style={{ minHeight: "80px" }}>
                            <div class="card-content">
                                <span class="card-title"> {item}</span>
                            </div>
                            <div class="card-action">
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
