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
        this.setState({ list: this.state.list.concat(array) });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.mySubmittedForm}>
                    <h1>Product Info</h1>
                    <input type="text" value={this.state.data} onChange={this.myChangeHandler} />
                    <input type="submit" value="Submit" />
                </form>
                <p>Product list:</p>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            // style={{ display: this.state.visible ? "block" : "none" }}

        );
    }
}

export default Form
