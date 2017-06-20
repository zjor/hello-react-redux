import React from 'react';
import { ListCheckbox } from 'react-toolbox/lib/list';

const Task = ({text, done, onClick}) => {

    return (
        <ListCheckbox
            checked={done}
            onChange={onClick}
            caption={text}/>
    );
};

export {Task};