import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filter';

const todoApp = combineReducers({
    todos: todos,
    filter: filter
});

export default todoApp;