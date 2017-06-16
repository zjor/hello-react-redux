import React, {Component} from 'react';

import {AddTask} from 'components/AddTask';
import {Filter} from 'components/Filter';
import {TaskList} from 'components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let tasks = [];
        this.props.tasks.forEach((item, index) => {
            tasks.push({
                id: index,
                name: item,
                done: false
            });
        });
        this.setState({
            tasks: tasks,
            visibleTasks: tasks,
            filter: this.props.filter
        });
    }

    getNextId() {
        return this.state.tasks.map(t => t.id).reduce((max, id) => Math.max(max, id)) + 1;
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

        const onValue = (value) => {
            const tasks = this.state.tasks.concat({
                id: this.getNextId(),
                name: value,
                done: false
            });

            this.setState({
                tasks: tasks,
                visibleTasks: filterTasks(tasks, this.state.filter),
                filter: this.state.filter
            });
        };

        const onToggleDone = (task) => {
            let tasks = [];
            this.state.tasks.forEach(t => {
                tasks.push({
                    id: t.id,
                    name: t.name,
                    done: t.id === task.id ? !t.done : t.done
                });
            });
            this.setState({
                tasks: tasks,
                visibleTasks: filterTasks(tasks, this.state.filter),
                filter: this.state.filter
            });
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
                <AddTask onValue={onValue}/>
                <Filter filterName={this.state.filter} onChange={onFilter}/>
                <TaskList tasks={this.state.visibleTasks} onToggleDone={onToggleDone}/>
            </div>
        );
    }

}

export {App};