const CELL_SIZE = 64;
const CANVAS_MARGIN = 8;

const P1_COLOR = "red";
const P2_COLOR = "#3f3f3f";
const ES_COLOR = "pink";
const BORDER_COLOR = "black";
const DARK_WOOD_COLOR = "BurlyWood"; //"#DEB887";
const LIGHT_WOOD_COLOR = "BlanchedAlmond"; // ##FFEBCD
const PIECE_SHADOW_COLOR = "#1f1f1f";
const SELECTED_PIECE_HIGHLIGHT_COLOR = "Gold";
const CROWN_COLOR = "Gold";
const FONT_COLOR = "black";
const EAT_HIGHLIGHT_COLOR = "LightGreen";

const UP_LEFT = 0;
const UP_RIGHT = 1;
const DOWN_LEFT = 2;
const DOWN_RIGHT = 3;

const PIECE_NOT_MOVED = 0;
const PIECE_MOVED = 1;
const PIECE_JUMPED = 2;
const PIECE_PROMOTED = 3;

const DIAGONAL_DIRECTIONS = [
    UP_LEFT,
    UP_RIGHT,
    DOWN_LEFT,
    DOWN_RIGHT
];

const DIAGONAL_UP_DIRECTIONS = [
    UP_LEFT,
    UP_RIGHT
];

const DIAGONAL_DOWN_DIRECTIONS = [
    DOWN_LEFT,
    DOWN_RIGHT
];

const P1 = 1;
const P1S = 11;
const P1H = 12;
const P1SH = 13;

const P2 = 2;
const P2S = 21;
const P2H = 22;
const P2SH = 23;

const K1 = 3;
const K1S = 31;
const K1H = 32;
const K1SH = 33;

const K2 = 4;
const K2S = 41;
const K2H = 42;
const K2SH = 43;

const ES = 0;
const ESH = 10;

const PLAYER_ONE_NORMAL_PIECES = [
    P1, P1S, P1H, P1SH
];

const PLAYER_ONE_KING_PIECES = [
    K1, K1S, K1H, K1SH
];

const PLAYER_TWO_NORMAL_PIECES = [
    P2, P2S, P2H, P2SH
];

const PLAYER_TWO_KING_PIECES = [
    K2, K2S, K2H, K2SH
];

const SELECTED_PIECES = [
    P1S, P1SH,
    K1S, K1SH,
    P2S, P2SH,
    K2S, K2SH
];

const HIGLIGHTED_PIECES = [
    P1H,
    K1H,
    P2H,
    K2H,
    ESH
];

let GAME_BOARD = [
    ES, P2, ES, P2, ES, P2, ES, P2,
    P2, ES, P2, ES, P2, ES, P2, ES,
    ES, P2, ES, P2, ES, P2, ES, P2,
    ES, ES, ES, ES, ES, ES, ES, ES,
    ES, ES, ES, ES, ES, ES, ES, ES,
    P1, ES, P1, ES, P1, ES, P1, ES,
    ES, P1, ES, P1, ES, P1, ES, P1,
    P1, ES, P1, ES, P1, ES, P1, ES
];

/*
let GAME_BOARD = [
    ES, ES, ES, ES, ES, ES, ES, ES,
    ES, ES, ES, ES, ES, ES, ES, ES,
    ES, ES, ES, ES, ES, ES, ES, ES,
    
    ES, ES, ES, ES, ES, ES, ES, ES,
    ES, P2, ES, ES, ES, ES, ES, ES,
    
    P1, ES, P1, ES, P1, ES, P1, ES,
    ES, P1, ES, P1, ES, P1, ES, P1,
    P1, ES, P1, ES, P1, ES, P1, ES
];
*/

const GAME_BOARD_SIDE_LENGTH = Math.sqrt(GAME_BOARD.length);

const MS_NO_PIECE_SELECTED = 0;
const MS_PIECE_SELECTED = 1;

const UI_FONT = "20px serif";
const CANVAS_FONT = "100px serif";