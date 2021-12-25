let mouseState = MS_NO_PIECE_SELECTED;
let selectedX;
let selectedY;

function onMouseClick(event) {
    const x = toBoardCoord(event.clientX);
    const y = toBoardCoord(event.clientY);
    if (mouseState == MS_NO_PIECE_SELECTED) {
        selectPieceAt(x, y);
    }
    else if (mouseState == MS_PIECE_SELECTED) {
        handleMovement(selectedX, selectedY, x, y);
    }
}

function selectPieceAt(x, y) {
    const piece = getPieceAtCoords(x, y);
    if (isEmptyPiece(piece)) {
        console.debug("Cant select empty piece.");
    }
    else if (!doesPieceBelongToPlayer(piece, currentTurn)) {
        console.debug(`The selected piece does not belong to player: ${currentTurn}`);
    }
    else {
        selectedX = x;
        selectedY = y;
        mouseState = MS_PIECE_SELECTED;
        const index = coordsToIndex(x, y);
        toggleSelectedPieceHighlightAt(index);
        console.debug(`Piece: ${piece} selected at index: ${index}`);
    }
    drawBoardAndPieces();UI_FONT
}

function unSelectPieceAt(x, y) {
    if (x != selectedX || y != selectedY) {
        return;
    }
    selectedX = undefined;
    selectedY = undefined;
    mouseState = MS_NO_PIECE_SELECTED;
    const index = coordsToIndex(x, y);
    toggleSelectedPieceHighlightAt(index);
    drawBoardAndPieces();
}

function setMouseState(state) {
    mouseState = state;
}

function getMouseState() {
    return mouseState;
}