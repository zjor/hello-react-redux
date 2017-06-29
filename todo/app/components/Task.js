import React from 'react';
import { ListCheckbox } from 'react-toolbox/lib/list';

import styles from './Task.css';

const Task = ({text, done, onClick}) => {

    return (
        <ListCheckbox
        	className={done ? styles.taskDone : styles.taskActive}
            checked={done}
            onChange={onClick}
            caption={text}/>
    );
};

export {Task};
