const { Component } = React;

class Specials extends Component {
    constructor(props) {
        super(props);

        this._bind('sum');

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
                <h1>Specials</h1>

                Counter: { this.state.counter }

                <p>
                    <button onClick={ () => this.sum() }>Click Me!</button>
                    <br/>
                    <span>Hola!</span>
                </p>
            </div>
        );
    }
}

export default Specials;
