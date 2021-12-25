function handleMovement(fromX, fromY, toX, toY) {
    const fromIndex = coordsToIndex(fromX, fromY);
    const toIndex = coordsToIndex(toX, toY);
    const pieceMovementResult = tryMovePiece(fromIndex, toIndex);
    switch (pieceMovementResult) {
        case PIECE_JUMPED:
            console.debug("Piece jumped!");
            removeAllHighlightsFromGameBoard();
            drawBoardAndPieces();
            if (!canPlayerMakeJumps(currentTurn)) {
                switchTurns();
            }
            break;
        case PIECE_MOVED:
            console.debug("Piece moved!");
            switchTurns();
            break;
        case PIECE_PROMOTED:
            console.debug("Piece promoted!");
            switchTurns();
            break;
        case PIECE_NOT_MOVED:
            unSelectPieceAt(fromX, fromY);
            break;
    }
}

function tryMovePiece(fromIndex, toIndex) {
    const piece = getPieceAtIndex(fromIndex);
    const directions = getAllowedDirectionsForPiece(piece);
    if (!isMovementDisabled() && getAllowedToIndexes(directions, 1, fromIndex).includes(toIndex)) {
        return movePiece(fromIndex, toIndex);
    }
    if (getAllowedToIndexes(directions, 2, fromIndex).includes(toIndex)) {
        return jumpAndEatPiece(fromIndex, toIndex);
    }
    return PIECE_NOT_MOVED;
}

function getAllowedToIndexes(directions, distance, fromIndex) {
    const toIndexes = [];
    for (let direction of directions) {
        let toIndex = getDiagonalToIndex(direction, distance, fromIndex);
        if (toIndex != undefined) {    
            toIndexes.push(toIndex);
        }
    }
    return toIndexes;
}

function movePiece(fromIndex, toIndex) {
    console.debug("Moving piece.");
    const pieceTypeToMove = getPieceAtIndex(fromIndex);
    setCell(fromIndex, ES);
    setCell(toIndex, pieceTypeToMove);
    setMouseState(MS_NO_PIECE_SELECTED);
    if (hasPieceReachedToTheEndOfTheBoard(pieceTypeToMove, toIndex)) {
        promotePieceToKing(pieceTypeToMove, toIndex);
        return PIECE_PROMOTED;
    }
    return PIECE_MOVED;
}

function jumpAndEatPiece(fromIndex, toIndex) {
    const movePieceResult = movePiece(fromIndex, toIndex);
    const direction = getDiagonalDirection(2, fromIndex, toIndex);
    const enemyPieceIndex = getDiagonalToIndex(direction, 1, fromIndex);
    console.debug(`Jumping from: ${fromIndex} to: ${toIndex} direction: ${direction} and removing piece from: ${enemyPieceIndex}`);
    setCell(enemyPieceIndex, ES);
    if (movePieceResult == PIECE_PROMOTED) {
        return PIECE_PROMOTED;
    }
    return PIECE_JUMPED;
}