// import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const { Component } = React;

if (module.hot) {
	module.hot.accept()
}

class Index extends Component {
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
				<span>f</span>
			</div>
		);
	}
}

ReactDOM.render(
  <Index />,
  document.querySelector('.vw-index')
);