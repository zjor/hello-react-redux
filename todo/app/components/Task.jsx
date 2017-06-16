import React from 'react';

const Task = ({task, onClick}) => {

    const style = {};
    if (task.done) {
        style.textDecoration = "line-through";
    }

    return (
        <li onClick={onClick.bind(this, task)}>
            <span style={style}>{task.name}</span>
        </li>
    );
};

export {Task};