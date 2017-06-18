const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    done: false
                }
            ];
        default:
            return state;
    }
};

export {todoReducer };