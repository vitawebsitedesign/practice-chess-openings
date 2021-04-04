import boardInitialPiecesState from './data/board-initial-pieces-state';

const initialState = {
    selectedPiece: null,
    pieces: boardInitialPiecesState
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case 'BOARD_RESET':
            return {...state, pieces: boardInitialPiecesState};
        case 'SELECTED_PIECE_SET':
            return {...state, selectedPiece: action.selectedPiece};
        case 'PIECE_COORDINATE_SET': {
            const pieces = JSON.parse(JSON.stringify([...state.pieces]));
            const piece = pieces.find(p => p.id === action.move.pieceId);
            piece.file = action.move.file;
            piece.rank = action.move.rank;
            return {...state, pieces: pieces};
        }
        case 'PIECE_REMOVE': {
            const pieces = JSON.parse(JSON.stringify([...state.pieces]));
            const piecesFiltered = pieces.filter(p => p.id !== action.id);
            return {...state, pieces: piecesFiltered};
        }
        default:
            break;
    }
    return state;
};

export default board;
