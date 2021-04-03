const initialState = {
    selectedPiece: null,
    pieces: [
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-a2',
            file: 'a',
            rank: 2
        },
        {
            type: 'rook',
            colour: 'white',
            id: 'rook-white-a1',
            file: 'a',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-b2',
            file: 'b',
            rank: 2
        },
        {
            type: 'horse',
            colour: 'white',
            id: 'horse-white-b1',
            file: 'b',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-c2',
            file: 'c',
            rank: 2
        },
        {
            type: 'bishop',
            colour: 'white',
            id: 'bishop-white-c1',
            file: 'c',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-d2',
            file: 'd',
            rank: 2
        },
        {
            type: 'king',
            colour: 'white',
            id: 'king-white-d1',
            file: 'd',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-e2',
            file: 'e',
            rank: 2
        },
        {
            type: 'queen',
            colour: 'white',
            id: 'queen-white-e1',
            file: 'e',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-f2',
            file: 'f',
            rank: 2
        },
        {
            type: 'bishop',
            colour: 'white',
            id: 'bishop-white-f1',
            file: 'f',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-g2',
            file: 'g',
            rank: 2
        },
        {
            type: 'horse',
            colour: 'white',
            id: 'horse-white-g1',
            file: 'g',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'white',
            id: 'pawn-white-h2',
            file: 'h',
            rank: 2
        },
        {
            type: 'rook',
            colour: 'white',
            id: 'rook-white-h1',
            file: 'h',
            rank: 1
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-a2',
            file: 'a',
            rank: 7
        },
        {
            type: 'rook',
            colour: 'black',
            id: 'rook-black-a1',
            file: 'a',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-b2',
            file: 'b',
            rank: 7
        },
        {
            type: 'horse',
            colour: 'black',
            id: 'horse-black-b1',
            file: 'b',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-c2',
            file: 'c',
            rank: 7
        },
        {
            type: 'bishop',
            colour: 'black',
            id: 'bishop-black-c1',
            file: 'c',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-d2',
            file: 'd',
            rank: 7
        },
        {
            type: 'king',
            colour: 'black',
            id: 'king-black-d1',
            file: 'd',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-e2',
            file: 'e',
            rank: 7
        },
        {
            type: 'queen',
            colour: 'black',
            id: 'queen-black-e1',
            file: 'e',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-f2',
            file: 'f',
            rank: 7
        },
        {
            type: 'bishop',
            colour: 'black',
            id: 'bishop-black-f1',
            file: 'f',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-g2',
            file: 'g',
            rank: 7
        },
        {
            type: 'horse',
            colour: 'black',
            id: 'horse-black-g1',
            file: 'g',
            rank: 8
        },
        {
            type: 'pawn',
            colour: 'black',
            id: 'pawn-black-h2',
            file: 'h',
            rank: 7
        },
        {
            type: 'rook',
            colour: 'black',
            id: 'rook-black-h1',
            file: 'h',
            rank: 8
        }
    ]
};

const board = (state = initialState, action) => {
    switch (action.type) {
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
