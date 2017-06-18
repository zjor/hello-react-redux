import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import { App } from 'components/App';
import todoApp from 'reducers/index';

import { addTodo, toggleTodo } from 'actions/index';

const store = createStore(todoApp);

const mapStateToProps = (state) => {
    return {
        tasks: state.todos,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (text) => dispatch(addTodo(text)),
        onToggleDone: (id) => dispatch(toggleTodo(id))
    }
};

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
    <Provider store={store}>
        <VisibleApp/>
    </Provider>
    , document.getElementById('root'));