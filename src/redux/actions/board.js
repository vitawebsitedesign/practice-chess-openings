export const selectPiece = (selectedPiece) => {
    const adapted = selectedPiece ? {
        pieceId: selectedPiece.pieceId,
        colour: selectedPiece.colour,
        file: selectedPiece.file,
        rank: parseInt(selectedPiece.rank)
    } : null;

    return {
        type: 'SELECTED_PIECE_SET',
        selectedPiece: adapted
    };
};

export const movePiece = (pieceId, file, rank) => ({
    type: 'PIECE_COORDINATE_SET',
    move: {
        pieceId,
        file,
        rank
    }
});

export const removePiece = (id) => ({
    type: 'PIECE_REMOVE',
    id
});
