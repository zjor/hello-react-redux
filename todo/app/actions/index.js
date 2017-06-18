let nextTaskId = 0;

export const addTodo = text => {
    return {
        type: "ADD_TODO",
        id: nextTaskId++,
        name: text
    };
};

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id: id
    }
};