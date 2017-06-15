import React from 'react';

import { Task } from './Task';

const TaskList = ({tasks}) => {

    console.log(tasks);
    const children = tasks.map(task => <Task key={task} name={task}/>);

    return (
        <ul>
            {children}
        </ul>
    );
};

export { TaskList };