import React from 'react';
import {render} from 'react-dom';

// import { TaskList } from './components/TaskList';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //TODO: populate state from initial list from props
        this.setState({tasks: []});
    }

    render() {

        const onValue = (value) => {
            console.log('Adding ', value);
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

const Task = ({name}) => <li>{name}</li>;

const TaskList = ({tasks}) => {

    console.log(tasks);
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
    }

    componentWillMount() {
        this.setState({typed: ''});
    }

    keyPressed(event) {
        this.setState({
            typed: event.target.value
        });
    }

    keyDown(event) {
        if (event.key == 'Enter') {
            this.submitValue();
        }
    }

    submitValue() {
        this.props.onValue(this.state.typed);
        this.textInput.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter task here" 
                    onChange={this.keyPressed.bind(this)} 
                    onKeyDown={this.keyDown.bind(this)}
                    ref={(input => { this.textInput = input; })}/>
                <button onClick={this.submitValue.bind(this)}>Add</button>
            </div>
        );
    }

}

render(<App/>, document.getElementById('root'));