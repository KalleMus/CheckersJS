function removeAllHighlightsFromGameBoard() {
    GAME_BOARD = GAME_BOARD.map(cell => {
        return toNonHighlightedPiece(cell);
    });
}

function toggleSelectedPieceHighlightAt(index) {
    const piece = getPieceAtIndex(index)
    const changeToPiece = isSelectedPiece(piece) ? selectedPieceToNormal(piece) : toSelectedPiece(piece);
    setCell(index, changeToPiece);
}

function highlightPieceAt(index) {
    const piece = getPieceAtIndex(index);
    setCell(index, toHighlightedPiece(piece));
}

function togglePieceHighlightAt(index) {
    const piece = getPieceAtIndex(index)
    const changeToPiece = isHighlightedPiece(piece) ? highlightedPieceToNormal(piece) : toHighlightedPiece(piece);
    setCell(index, changeToPiece);
}

function toHighlightedPiece(pieceType) {
    if (isHighlightedPiece(pieceType)) {
        return pieceType;
    }
    switch (pieceType) {
        case P1:
        case P1S:
            return P1H;
        case P2:
        case P2S:
            return P2H;
        case K1:
        case K1S:
            return K1H;
        case K2:
            return K2H;
        case ES:
            return ESH;
        default:
            return ESH;
    }
}

function toSelectedPiece(pieceType) {
    switch (pieceType) {
        case P1:
        case P1H:
            return P1S;
        case P2:
        case P2H:
            return P2S;
        case K1:
        case K1H:
            return K1S;
        case K2:
        case K2H:
            return K2S;
        default:
            return ES;
    }
}

function toNonHighlightedPiece(piece) {
    if (isPlayerOneNormalPiece(piece)) {
        return P1;
    }
    if (isPlayerOneKingPiece(piece)) {
        return K1;
    }
    if (isPlayerTwoNormalPiece(piece)) {
        return P2;
    }
    if (isPlayerTwoKingPiece(piece)) {
        return K2;
    }
    return ES;
}

function highlightedPieceToNormal(highlightedPieceType) {
    switch (highlightedPieceType) {
        case P1H:
            return P1;
        case P2H:
            return P2;
        case K1H:
            return K1;
        case K2H:
            return K2;
        default:
            return ES;
    }
}

function selectedPieceToNormal(highlightedPieceType) {
    switch (highlightedPieceType) {
        case P1S:
            return P1;
        case P2S:
            return P2;
        case K1S:
            return K1;
        case K2S:
            return K2;
        default:
            return ES;
    }
}