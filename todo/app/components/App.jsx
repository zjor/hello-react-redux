import React, {Component} from 'react';

import {AddTask} from 'containers/AddTask';

import { VisibleTaskList } from '../containers/VisibleTaskList';
import {Filter} from 'containers/Filter';
import {Counter} from 'containers/Counter';

export const App = () => {
    return (
        <div>
            <AddTask/>
            <Filter/>
            <VisibleTaskList/>
            <Counter/>
        </div>
    );
};