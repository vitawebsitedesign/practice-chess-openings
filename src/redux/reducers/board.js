import boardInitialPiecesState from './data/board-initial-pieces-state';

const initialState = {
    selectedPiece: null,
    pieces: boardInitialPiecesState,
    moves: []
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case 'BOARD_RESET':
            return JSON.parse(JSON.stringify(initialState));
        case 'SELECTED_PIECE_SET':
            return {...state, selectedPiece: action.selectedPiece};
        case 'MOVE_PIECE': {
            const pieces = JSON.parse(JSON.stringify([...state.pieces]));
            const piece = pieces.find(p => p.id === action.move.pieceId);
            const moves = JSON.parse(JSON.stringify(state.moves));
            moves.push({
                pieceId: action.move.pieceId,
                file: action.move.file,
                rank: action.move.rank
            });

            piece.file = action.move.file;
            piece.rank = action.move.rank;
            return {
                ...state,
                pieces: pieces,
                moves: moves
            };
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
