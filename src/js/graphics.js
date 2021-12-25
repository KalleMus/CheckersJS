function drawBoardAndPieces() {
    drawEmptyBoard();
    drawPieces();
}

function drawEmptyBoard() {
    const sideLength = GAME_BOARD_SIDE_LENGTH;
    for (let y = 0; y < sideLength; y++) {
        let isOddRow = y % 2 == 0;
        for (let x = 0; x < sideLength; x++) {
            drawBoardSquare(x, y, calculateColorForBoardCell(isOddRow, x));
        }
    }
}

function calculateColorForBoardCell(isOddRow, x) {
    if (isOddRow) {
        return chooseBoardCellColor(x, DARK_WOOD_COLOR, LIGHT_WOOD_COLOR);
    }
    return chooseBoardCellColor(x, LIGHT_WOOD_COLOR, DARK_WOOD_COLOR);
}

function chooseBoardCellColor(x, color1, color2) {
    return x % 2 != 0 ? color1 : color2;
}

function drawPieces() {
    const sideLength = GAME_BOARD_SIDE_LENGTH;
    for (let y = 0; y < sideLength; y++) {
        for (let x = 0; x < sideLength; x++) {
            drawPiece(x, y);
        }
    }
}

function drawBoardSquare(x, y, color) {
    drawRectangle(x, y, CELL_SIZE, color);
}

function drawPiece(x, y) {
    const pieceType = getPieceAtCoords(x, y);
    const color = getCellColor(pieceType);
    if (isSelectedPiece(pieceType)) {
        drawRectangle(x, y, CELL_SIZE, SELECTED_PIECE_HIGHLIGHT_COLOR);
    }
    if (isHighlightedPiece(pieceType)) {
        drawRectangle(x, y, CELL_SIZE, EAT_HIGHLIGHT_COLOR);
    }
    if (isPiece(pieceType)) {
        drawPieceCircle(x, y, CELL_SIZE, color, true);
    }
    if (isKingPiece(pieceType)) {
        drawCrownForPiece(x, y);
    }
}

function drawCrownForPiece(x, y) {
    ctx.beginPath();
    let pieceCenter = CELL_SIZE / 2;
    let crownStartX = toScreenCoord(x) + pieceCenter;
    let crownStartY = toScreenCoord(y) + pieceCenter + CELL_SIZE * 0.1;
    ctx.fillStyle = CROWN_COLOR;
    ctx.moveTo(crownStartX, crownStartY);
    ctx.lineTo(crownStartX - CELL_SIZE * 0.25, crownStartY);
    ctx.lineTo(crownStartX - CELL_SIZE * 0.25, crownStartY - CELL_SIZE * 0.25);
    ctx.lineTo(crownStartX - CELL_SIZE * 0.1, crownStartY - CELL_SIZE * 0.1);
    ctx.lineTo(crownStartX, crownStartY - CELL_SIZE * 0.25);
    ctx.lineTo(crownStartX + CELL_SIZE * 0.1, crownStartY - CELL_SIZE * 0.1);
    ctx.lineTo(crownStartX + CELL_SIZE * 0.25, crownStartY - CELL_SIZE * 0.25);
    ctx.lineTo(crownStartX + CELL_SIZE * 0.25, crownStartY);
    ctx.closePath();
    ctx.fill();
}

function drawCircle(x, y, size, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, size, 0, 2 * Math.PI, false);
    ctx.fill();
}

function drawPieceCircle(x, y, size, color, hasShadow) {
    const circleScreenSize = size / 2;
    let screenX = toScreenCoord(x) + circleScreenSize;    
    let screenY = toScreenCoord(y) + circleScreenSize;
    const visibleCircleSize = circleScreenSize * 0.9;

    if (hasShadow) {
        drawCircle(screenX + 1, screenY + 1, visibleCircleSize , PIECE_SHADOW_COLOR);
        screenX -= 1;
        screenY -= 1;
    }
    drawCircle(screenX, screenY, visibleCircleSize, color);
}

function drawRectangle(x, y, size, color) {
    const screenX = toScreenCoord(x);
    const screenY = toScreenCoord(y);
    ctx.fillStyle = color;
    ctx.fillRect(screenX, screenY, size, size);
    ctx.fillStyle = BORDER_COLOR;
    ctx.strokeRect(screenX, screenY, size, size);
}

function getCellColor(cellType) {
    switch (cellType) {
        case P1:
        case P1S:
        case P1H:
        case K1:
        case K1S:
        case K1H:
            return P1_COLOR;
        
        case P2:
        case P2S:
        case P2H:
        case K2:
        case K2S:
        case K2H:
            return P2_COLOR;

        default:
            return ES_COLOR;
    }
}

function displayPlayersTurn(player) {
    const playerColor = getPlayerColor(player);
    uiContext.fillStyle = "white";
    uiContext.fillRect(0, 0, 400, 400);
    uiContext.fillStyle = FONT_COLOR;
    uiContext.font = UI_FONT;
    uiContext.fillText(playerColor + "'s turn", 0, 50);
}

function drawGameOverText(playerWhoWon) {
    const playerColor = getPlayerColor(playerWhoWon);
    console.log(`GAME OVER! ${playerColor} wins!`); 
    ctx.fillStyle = FONT_COLOR;
    ctx.font = CANVAS_FONT;
    ctx.fillText(playerColor + " Wins!", 50, 275);
}

function getPlayerColor(player) {
    if (player == P1) {
        return "Red";
    }
    else if (player == P2) {
        return "Black";
    }
}