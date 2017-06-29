import React from 'react';

import {connect} from 'react-redux';

const CounterComponent = ({tasks}) => {

    const all = tasks.length;
    const done = tasks.filter(task => task.done).length;
    const active = all - done;

    return (
        <div>
            Open: {active};
            Done: {done};
            All: {all}
        </div>
    );

};

const Counter = connect(state => ({tasks: state.todos})) (CounterComponent);

export {Counter};
