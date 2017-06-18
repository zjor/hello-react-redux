import React, {Component} from 'react';

import {AddTask} from 'containers/AddTask';
import {Filter} from 'components/Filter';
import {TaskList} from 'components/TaskList';
import {Counter} from 'containers/Counter';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // let tasks = [];
        // this.props.tasks.forEach((item, index) => {
        //     tasks.push({
        //         id: index,
        //         name: item,
        //         done: false
        //     });
        // });
        // this.setState({
        //     tasks: tasks,
        //     visibleTasks: tasks,
        //     filter: this.props.filter
        // });
    }

    getNextId() {
        return this.props.tasks.map(t => t.id).reduce((max, id) => Math.max(max, id), 0) + 1;
    }

    render() {

        const filterTasks = (tasks, filter) => {
            if (filter === 'All') {
                return tasks;
            } else if (filter === 'Done') {
                return tasks.filter(task => task.done);
            } else if (filter === 'Active') {
                return tasks.filter(task => !task.done);
            }
        };

        const onToggleDone = (task) => {
            this.props.onToggleDone(task.id);
        };

        const onFilter = (name) => {
            this.setState({
                tasks: this.state.tasks,
                visibleTasks: filterTasks(this.state.tasks, name),
                filter: name
            });
        };

        return (
            <div>
                <AddTask/>
                {/*<Filter filterName={this.state.filter} onChange={onFilter}/>*/}
                <TaskList tasks={this.props.tasks} onToggleDone={onToggleDone}/>
                <Counter/>
            </div>
        );
    }

}

export {App};