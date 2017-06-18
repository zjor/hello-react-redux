import React from 'react';

const Task = ({text, done, onClick}) => {

    const style = {
        textDecoration: done ? 'line-through' : 'none'
    };

    return (
        <li onClick={onClick}>
            <span style={style}>{text}</span>
        </li>
    );
};

export {Task};