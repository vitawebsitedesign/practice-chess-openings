const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXHIBITS':
            return [...state, ...action.items];
        default:
            break;
    }
    return state;
};

export default reducer;
