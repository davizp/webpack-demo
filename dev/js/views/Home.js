// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

const { Component } = React;

class Home extends Component {
    constructor(props) {
        super(props);

        this.sum = this.sum.bind(this);

        this.state = {
            counter: 0
        };
    }

    sum() {
        const counter = this.state.counter + 1;

        this.setState({ counter });
    }

    render() {
        return (
            <div>
                Counter: { this.state.counter }
                <button onClick={ () => this.sum() }>Click Me!!!!!</button>
                <span>Please change this text!</span>
            </div>
        );
    }
}

export default Home;