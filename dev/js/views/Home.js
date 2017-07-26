// import React, { Component } from 'react';
const { Component } = React;

class Home extends Component {
    constructor(props) {
        super(props);

        this._bind('sum');

        console.log(this._bind);

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
                <h1>Index</h1>
                Counter: { this.state.counter }
                <p>
                    <button onClick={ () => this.sum() }>Click Me!</button>
                    <br/><br/>
                    <span>Hola Mundoss!</span>
                </p>
            </div>
        );
    }
}

export default Home;
