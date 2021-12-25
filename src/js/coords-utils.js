function coordsToIndex(x, y) {
    return x + (y * GAME_BOARD_SIDE_LENGTH);
}

function toScreenCoord(boardCoord) {
    return boardCoord * CELL_SIZE;
}

function toBoardCoord(screenCord) {
    const screenCordWithMargin = screenCord - CANVAS_MARGIN;
    if (screenCordWithMargin < CELL_SIZE) {
        return 0;
    }
    return Math.floor(screenCordWithMargin / CELL_SIZE);
}