import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    handleIncrement = () => {
        const {count} = this.state;

        this.setState({
            count: count + 1,
        });
    };

    handleDecrement = () => {
        const {count} = this.state;

        this.setState({
            count: count - 1,
        });
    };

    render() {

        const {count} = this.state;
        const { pageTitle, incrememtButtonTitle, decrememtButtonTitle } = this.props;
        
        return (
            <div>
            <h2>{pageTitle}</h2>
            <h3>Current count is {count}</h3>
            <span><button onClick={this.handleIncrement}>{incrememtButtonTitle}</button></span>
            <span><button onClick={this.handleDecrement}>{decrememtButtonTitle}</button></span>
        </div>
        )
    }
}

export default Counter;
