const initialState = [];

const moves = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_ADD':
            return [...state, ...action.moves];
        default:
            break;
    }
    return state;
};

export default moves;
