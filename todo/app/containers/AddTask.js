import React, { Component } from 'react';

import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';

import { connect } from 'react-redux';

import { addTodo } from 'actions/index';

import styles from './AddTask.css';


class AddTaskComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({typed: ''});
    }

    onChange(value) {
        this.setState({
            typed: value
        });
    }

    onKeyPress(event) {
        if (event.key == 'Enter') {
            this.submitValue();
        }
    }

    submitValue() {
        this.props.dispatch(addTodo(this.state.typed));
        this.setState({typed: ''});
    }

    render() {
        return (
            <div className={styles.container}>
                <Input type="text"
                       label="Enter task here"
                       onChange={this.onChange.bind(this)}
                       onKeyPress={this.onKeyPress.bind(this)}
                       value={this.state.typed}
                       className={styles.input}/>
                <Button raised primary
                    label="Add" 
                    onClick={this.submitValue.bind(this)}
                    className={styles.button}/>
            </div>
        );
    }
}

const AddTask = connect() (AddTaskComponent);

export { AddTask };
