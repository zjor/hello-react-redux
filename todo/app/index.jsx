import React from 'react';
import {render} from 'react-dom';

const App = ({ children }) => ( <h1>{children}</h1> );

const TodoInput = () => {
	return (
		<input type="text" placeholder="Add item here"/>
	);
};

render(<App><TodoInput/></App>, document.getElementById('root'));