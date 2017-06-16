import React, { Component } from 'react';

import { AddTask } from 'components/AddTask';
import { TaskList } from 'components/TaskList';

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
        this.setState({tasks: tasks});
    }

    getNextId() {
        return this.state.tasks.map(t => t.id).reduce((max, id) => Math.max(max, id)) + 1;
    }

    render() {

        const onValue = (value) => {
            this.setState({tasks: this.state.tasks.concat({
                id: this.getNextId(),
                name: value,
                done: false
            })});
        };

        const onToggleDone = (task) => {
            let tasks = [];
            this.state.tasks.forEach(t => {
                if (t.id == task.id) {
                    t.done = !t.done;
                }
                tasks.push(t);
            });
            this.setState({tasks: tasks});
        };

        return (
            <div>
                <AddTask onValue={onValue}/>
                <TaskList tasks={this.state.tasks} onToggleDone={onToggleDone}/>
            </div>
        );
    }

}

export { App };