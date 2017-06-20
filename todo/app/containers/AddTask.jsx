import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from 'actions/index';

import {Button} from 'react-toolbox/lib/button';

class AddTaskComponent extends Component {

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
        this.props.dispatch(addTodo(this.state.typed));
        this.textInput.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter task here"
                       onChange={this.keyPressed.bind(this)}
                       onKeyDown={this.keyDown.bind(this)}
                       ref={(input => { this.textInput = input; })}/>
                <button onClick={this.submitValue.bind(this)} >Add</button>
                <Button label="Click me"/>
            </div>
        );
    }
}

const AddTask = connect() (AddTaskComponent);

export { AddTask };