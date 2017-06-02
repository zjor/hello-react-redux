import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);