import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';

const Button = (props) => {
	return (
		<button onClick={props.onClick}>{props.caption}</button>
		);
};

const Label = (props) => (<span>{props.counter}</span>)

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {counter: 0};	
	}

	render() {

		const increment = () => {
			this.setState({counter: this.state.counter + 1});
		};

		const decrement = () => {
			this.setState({counter: this.state.counter - 1});
		};

		return (
			<div>
				<h1>Hello world</h1>
				<Button caption="+" onClick={increment} />
				<Label counter={this.state.counter} />
				<Button caption="-" onClick={decrement} />
			</div>
			);
	}
};

let store = createStore((state = 0, action) => {
	switch (action.type) {
		case 'inc':
			return state + 1;
		case 'dec':
			return state - 1;
		default:
			return state;
	}
});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);