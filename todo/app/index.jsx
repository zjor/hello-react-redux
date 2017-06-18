import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import { App } from 'components/App';
import { todoReducer } from 'model/TodoModel';

const store = createStore(todoReducer);

const mapStateToProps = (state) => {
    return {
        tasks: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch({type: 'ADD_TODO', payload: task})
    }
};

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={store}>
        <VisibleApp/>
    </Provider>
    , document.getElementById('root'));