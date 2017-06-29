import React from 'react';
import { List } from 'react-toolbox/lib/list';
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
        <List>
            {children}
        </List>
    );
};

export { TaskList };
