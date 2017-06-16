import React from 'react';

import { Task } from './Task';

const TaskList = ({tasks, onToggleDone}) => {

    const children = tasks.map(task =>
        <Task
            key={task.id}
            task={task}
            onClick={onToggleDone.bind(this, task)}
        />);

    return (
        <ul>
            {children}
        </ul>
    );
};

export { TaskList };