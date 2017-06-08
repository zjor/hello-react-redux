import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';

const Button = ({ caption, onClick}) => {
	return (
		<button onClick={onClick}>{caption}</button>
		);
};

const Label = ({ counter }) => (<span style={{color: 'green'}}>{counter}</span>);

const App = ({ counter, onIncrement, onDecrement }) => (
	<div>
		<Button caption="+" onClick={onIncrement} />
		<Label counter={counter}/>
		<Button caption="-" onClick={onDecrement} />	
	</div>
);

let store = createStore((state = {counter: 0}, action) => {
	switch (action.type) {
		case 'inc':
			return {counter: state.counter + 1};
		case 'dec':
			return {counter: state.counter - 1};
		default:
			return state;
	}
});

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => {
			dispatch({type: 'inc'})
		},
		onDecrement: () => {
			dispatch({type: 'dec'})
		}
	};
};

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
	<Provider store={store}>
		<VisibleApp />
	</Provider>,
	document.getElementById('root')
);