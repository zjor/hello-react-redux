import React, { Component } from 'react';

// import { Button } from 'react-toolbox/lib/button';

class AddTask extends Component {

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
                <button onClick={this.submitValue.bind(this)} >Add</button>
                {/*<Button icon="add" label="Add" flat primary onClick={this.submitValue.bind(this)} />*/}
            </div>
        );
    }

}

export { AddTask };