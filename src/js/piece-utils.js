// isPiece methods...
function isPiece(cellType) {
    return isPlayerOnePiece(cellType) || isPlayerTwoPiece(cellType);
}

function isPlayerOnePiece(pieceType) {
    return isPlayerOneNormalPiece(pieceType) || isPlayerOneKingPiece(pieceType);
}

function isPlayerTwoPiece(pieceType) {
    return isPlayerTwoNormalPiece(pieceType) || isPlayerTwoKingPiece(pieceType);
}

function isEmptyPiece(pieceType) {
    return pieceType == ES || pieceType == ESH;
}

// isNormalPiece methods...

function isNormalPiece(pieceType) {
    return isPlayerOneNormalPiece(pieceType) || isPlayerTwoNormalPiece(pieceType);
}

function isPlayerOneNormalPiece(pieceType) {
    return PLAYER_ONE_NORMAL_PIECES.includes(pieceType);
}

function isPlayerTwoNormalPiece(pieceType) {
    return PLAYER_TWO_NORMAL_PIECES.includes(pieceType);
}

// isKingPiece methods...

function isKingPiece(pieceType) {
    return isPlayerOneKingPiece(pieceType) || isPlayerTwoKingPiece(pieceType);
}

function isPlayerOneKingPiece(pieceType) {
    return PLAYER_ONE_KING_PIECES.includes(pieceType);
}

function isPlayerTwoKingPiece(pieceType) {
    return PLAYER_TWO_KING_PIECES.includes(pieceType);
}

// isHighlightedPiece methods...

function isSelectedPiece(pieceType) {
    return pieceType == P1S || pieceType == P2S || pieceType == K1S || pieceType == K2S;
}

function isHighlightedPiece(pieceType) {
    return pieceType == P1H || pieceType == K1H || pieceType == P2H || pieceType == K2H || pieceType == ESH;
}

function doesPieceBelongToPlayer(piece, player) {
    if (player == P1) {
        return isPlayerOnePiece(piece);
    } 
    return isPlayerTwoPiece(piece);
}

function isEnemyPiece(playerPiece, targetedPiece) {
    if (isPlayerOnePiece(playerPiece)) {
        return isPlayerTwoPiece(targetedPiece);
    }
    else if (isPlayerTwoPiece(playerPiece)) {
        return isPlayerOnePiece(targetedPiece);
    }
    return false;
}