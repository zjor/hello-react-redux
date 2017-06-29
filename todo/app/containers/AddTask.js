import React, { Component } from 'react';

import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';

import { connect } from 'react-redux';

import { addTodo } from 'actions/index';



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
                <Input type="text"
                       label="Enter task here"
                       onChange={this.keyPressed.bind(this)}
                       onKeyPress={this.keyDown.bind(this)}
                       ref={(input => { this.textInput = input; })}/>
                <Button label="Add" onClick={() => this.submitValue()}/>
            </div>
        );
    }
}

const AddTask = connect() (AddTaskComponent);

export { AddTask };
