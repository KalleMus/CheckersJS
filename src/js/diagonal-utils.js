function isDiagonal(direction, distance, fromIndex, toIndex) {
    return getDiagonalToIndex(direction, distance, fromIndex) == toIndex;
}

function getDiagonalToIndex(direction, distance, fromIndex) {
    switch (direction) {
        case UP_LEFT:
            return getUpLeftToIndex(distance, fromIndex);
        case UP_RIGHT:
            return getUpRightToIndex(distance, fromIndex);
        case DOWN_LEFT:
            return getDownLeftToIndex(distance, fromIndex);
        case DOWN_RIGHT:
            return getDownRightToIndex(distance, fromIndex);
    }
}

function getUpLeftToIndex(distance, fromIndex) {
    const toIndex = fromIndex - (GAME_BOARD_SIDE_LENGTH * distance) - distance;
    if (calcMod(toIndex) > calcMod(fromIndex)) {
        return undefined;
    }
    return toIndex;
}

function getUpRightToIndex(distance, fromIndex) {
    const toIndex = fromIndex - (GAME_BOARD_SIDE_LENGTH * distance) + distance;
    if (calcMod(toIndex) < calcMod(fromIndex)) {
        return undefined;
    }
    return toIndex;
}

function getDownLeftToIndex(distance, fromIndex) {
    const toIndex = fromIndex + (GAME_BOARD_SIDE_LENGTH * distance) - distance;
    if (calcMod(toIndex) > calcMod(fromIndex)) {
        return undefined;
    }
    return toIndex;
}

function getDownRightToIndex(distance, fromIndex) {
    const toIndex = fromIndex + (GAME_BOARD_SIDE_LENGTH * distance) + distance;
    if (calcMod(toIndex) < calcMod(fromIndex)) {
        return undefined;
    }
    return toIndex;
}

function calcMod(index) {
    return index % GAME_BOARD_SIDE_LENGTH;
}

function getDiagonalDirection(distance, fromIndex, toIndex) {
    if (fromIndex > toIndex) {
        return getDiagonalUpDirection(distance, fromIndex, toIndex);
    }
    return getDiagonalDownDirection(distance, fromIndex, toIndex);
}

function getDiagonalUpDirection(distance, fromIndex, toIndex) {
    const cursor = fromIndex - (GAME_BOARD_SIDE_LENGTH * distance);
    if (toIndex < cursor) {
        return UP_LEFT;
    }
    return UP_RIGHT;
}

function getDiagonalDownDirection(distance, fromIndex, toIndex) {
    const cursor = fromIndex + (GAME_BOARD_SIDE_LENGTH * distance);
    if (toIndex < cursor) {
        return DOWN_LEFT;
    }
    return DOWN_RIGHT;
}