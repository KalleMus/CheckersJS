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
        case K2S:
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
            return P1S;
        case P1H:
            return P1SH;
        case P2:
            return P2S;
        case P2H:
            return P2SH;
        case K1:
            return K1S;
        case K1H:
            return P1SH;
        case K2:
            return K2S;
        case K2H:
            return K2SH;
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

function highlightedPieceToNormal(highlightedPiece) {
    switch (highlightedPiece) {
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

function selectedPieceToNormal(piece) {
    switch (piece) {
        case P1S:
            return P1;
        case P1SH:
            return P1H;
        case P2S:
            return P2;
        case P2SH:
            return P2H;
        case K1S:
            return K1;
        case K1SH:
            return K1H;
        case K2S:
            return K2;
        case K2SH:
            return K2H;
        default:
            return ES;
    }
}