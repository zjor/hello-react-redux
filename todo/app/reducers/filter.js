export const filter = (state = "All", action) => {
    switch (action.type) {
        case "SET_FILTER":
            console.log("filter set to", action.filter);
            return action.filter;
        default:
            return state;
    }
};