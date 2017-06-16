import React from 'react';

const Counter = ({tasks}) => {

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

export { Counter };