import React from 'react';

import { Task } from './Task';

const TaskList = ({tasks, onToggleDone}) => {

    const children = tasks.map(task =>
        <Task
            key={task.id}
            text={task.name}
            done={task.done}
            onClick={() => onToggleDone(task.id)}
        />);

    return (
        <ul>
            {children}
        </ul>
    );
};

export { TaskList };