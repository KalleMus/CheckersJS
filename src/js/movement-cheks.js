function canPlayerMakeMoves(player) {
    return canPlayersPieceDoX(player, canPieceAtIndexMove);
}

function canPlayerMakeJumps(player) {
    return canPlayersPieceDoX(player, canPieceAtIndexJump);
}

function canPlayersPieceDoX(player, funcX) {
    let canDo = false;
    for (let i = 0; i < GAME_BOARD.length; i++) {
        let piece = getPieceAtIndex(i);
        if (doesPieceBelongToPlayer(piece, player) && funcX(i)) {
            canDo = true;
        }
    }
    return canDo;
}

function canPieceAtIndexMove(fromIndex) {
    const piece = getPieceAtIndex(fromIndex);
    let canMove = false;
    for (let direction of getAllowedDirectionsForPiece(piece)) {
        let toIndex = getDiagonalToIndex(direction, 1, fromIndex);
        if (isEmptySquare(toIndex) && isDiagonal(direction, 1, fromIndex, toIndex)) {
            canMove = true;
        }
    } 
    return canMove;
}

function canPieceAtIndexJump(fromIndex) {
    const piece = getPieceAtIndex(fromIndex);
    let canJump = false;
    for (let direction of getAllowedDirectionsForPiece(piece)) {
        let toIndex = getDiagonalToIndex(direction, 2, fromIndex);
        let indexToJumpOver = getDiagonalToIndex(direction, 1, fromIndex);
        let pieceToJumpOver = getPieceAtIndex(indexToJumpOver);
        if (!isEmptySquare(toIndex)) {
            console.debug(`Piece at index: ${fromIndex} can't jump to non empty square.`);
        }
        else if (isEmptySquare(indexToJumpOver)) {
            console.debug(`Cant jump over an empty square.`);
        }
        else if (!isEnemyPiece(piece, pieceToJumpOver)) {
            console.debug(`Piece at index: ${indexToJumpOver} is not an enemy piece.`);
        }
        else if (toIndex == undefined) {
            console.debug(`Invalid toIndex: ${toIndex}`);
        }
        else if (indexToJumpOver == undefined) {
            console.debug(`Invalid indexToJumpOver: ${indexToJumpOver}`);
        }
        else {
            console.debug(`%c Piece at: ${fromIndex} can jump to: ${toIndex} direction: ${direction}`, `color: green`);
            highlightPieceAt(fromIndex);
            highlightPieceAt(toIndex);
            canJump = true;
        }
    }
    return canJump;
}

function getAllowedDirectionsForPiece(piece) {
    if (isPlayerOneNormalPiece(piece)) {
        return DIAGONAL_UP_DIRECTIONS;
    }
    if (isPlayerTwoNormalPiece(piece)) {
        return DIAGONAL_DOWN_DIRECTIONS;
    }
    if (isKingPiece(piece)) {
        return DIAGONAL_DIRECTIONS;
    }
    return [];
}

function isEmptySquare(index) {
    return isEmptyPiece(getPieceAtIndex(index));
}