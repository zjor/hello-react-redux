import React from 'react';
import {render} from 'react-dom';

// import { TaskList } from './components/TaskList';

const App = ({children}) => ( <div>{children}</div> );

const Task = ({name}) => <li>{name}</li>;

const TaskList = ({tasks}) => {
    const children = tasks.map(task => <Task key={task} name={task}/>);

    return (
        <ul>
            {children}
        </ul>
    );
};

class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.setState({typed: ''});
    }

    render() {

        const handler = (event) => this.setState({typed: event.target.value});

        return (
            <div>
                <input type="text" placeholder="Enter task here" onChange={handler.bind(this)}/>
                <button>Add</button>
            </div>
        );
    }

}

const tasks = ["One", "Two", "Three"];

render(
    <App>
        <AddTask/>
        <TaskList tasks={tasks}/>
    </App>,
    document.getElementById('root'));