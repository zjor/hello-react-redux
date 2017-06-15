import React, { Component } from 'react';

import { AddTask } from 'components/AddTask';
import { TaskList } from 'components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({tasks: this.props.tasks});
    }

    render() {

        const onValue = (value) => {
            this.setState({tasks: this.state.tasks.concat(value)});
        }

        return (
            <div>
                <AddTask onValue={onValue}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }

}

export { App };