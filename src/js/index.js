const canvas = getCanvas();
const ctx = getContext();
const ui = getUi();
const uiContext = getUiContext();

let movementDisabled = false;

let currentTurn = P1;

function init() {
   drawBoardAndPieces();
   canvas.style.margin = CANVAS_MARGIN + "px";
   canvas.addEventListener("click", onMouseClick);
   displayPlayersTurn(currentTurn);
}

function promotePieceToKing(pieceType, index) {
    if (isPlayerOneNormalPiece(pieceType)) {
        setCell(index, K1);
    }
    else if (isPlayerTwoNormalPiece(pieceType)) {
        setCell(index, K2);
    }
}

function hasPieceReachedToTheEndOfTheBoard(pieceType, index) {
    if (isPlayerOnePiece(pieceType)) {
        return index < GAME_BOARD_SIDE_LENGTH;
    }
    else if (isPlayerTwoPiece(pieceType)) {
        return index > GAME_BOARD_SIDE_LENGTH * GAME_BOARD_SIDE_LENGTH - GAME_BOARD_SIDE_LENGTH - 1;
    }
}

function isMovementDisabled() {
    return movementDisabled;
}

function disableMovement() {
    movementDisabled = true;
}

function enableMovement() {
    movementDisabled = false;
}

function setCell(index, cellType) {
    GAME_BOARD[index] = cellType;
}

function getPieceAtCoords(x, y) {
    return getPieceAtIndex(coordsToIndex(x, y));
}

function getPieceAtIndex(index) {
    return GAME_BOARD[index];
}

function getContext() {
    return get2dContextFromElement(getCanvas());
}

function getCanvas() {
    return $("canvas");
}

function getUi() {
    return $("ui");
}

function getUiContext() {
    return get2dContextFromElement(getUi());
}

function get2dContextFromElement(element) {
    return element.getContext("2d");
}

function $(id) {
    return document.getElementById(id);
}

function switchTurns() {
    console.log("Switching turns.")
    enableMovement();
    removeAllHighlightsFromGameBoard();
    currentTurn = currentTurn == P1 ? P2 : P1;
    displayPlayersTurn(currentTurn);
    const canJump = canPlayerMakeJumps(currentTurn);
    const canMove = canPlayerMakeMoves(currentTurn);
    drawBoardAndPieces();
    if (canJump) {
        disableMovement();
    } 
    else if (canJump == false && canMove == false) {
        const playerWhoWon = currentTurn == P1 ? P2 : P1;
        drawGameOverText(playerWhoWon);
    }
}

init();