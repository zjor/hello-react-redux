import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import { toggleTodo } from '../actions/index';


const getVisibleTasks = state => {
    switch (state.filter) {
        case 'All':
            return state.todos;
        case 'Done':
            return state.todos.filter(todo => todo.done);
        case 'Active':
            return state.todos.filter(todo => !todo.done);

    }
};

const mapStateToProps = state => {
    return {
        tasks: getVisibleTasks(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleDone: (id) => dispatch(toggleTodo(id))
    }
};

const VisibleTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList);

export { VisibleTaskList };