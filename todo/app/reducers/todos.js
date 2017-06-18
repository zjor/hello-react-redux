export const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    done: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(task => (task.id === action.id) ? {id: task.id, name: task.name, done: !task.done} : task);
        default:
            return state;
    }
};
