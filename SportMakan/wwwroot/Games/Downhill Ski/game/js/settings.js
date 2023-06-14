var CANVAS_WIDTH = 1500;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 180;
var EDGEBOARD_Y = 20;

var FPS = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;
var FONT_GAME = "TradeGothic";

var STATE_LOADING    = 0;
var STATE_MENU       = 1;
var STATE_MENU_LEVEL = 2;
var STATE_GAME       = 3;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP   = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT  = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END   = 5;
var ON_BUT_YES_DOWN = 6;
var ON_PLAYER_ARRIVAL = 7;
var ON_PLAYER_FALL = 8;
var ON_OPPONENT_HIDE = 9;
var ON_OPPONENT_CHECK_COLLISION = 10;
var ON_READY_FOR_PLAYER_ARRIVAL = 11;
var ON_BACK_MENU = 12;
var ON_RESTART = 13;
var ON_NEXT_LEVEL = 14; 
var ON_BUT_END_TWEEN_X = 15;
var ON_END_COUNTDOWN = 16;

const PLAYER_ANIM_RUN = 0;
const PLAYER_ANIM_FALL = 1;
const PLAYER_ANIM_ARRIVAL = 2;
const PLAYER_ANIM_LEFT = 3;
const PLAYER_ANIM_LEFT_OUT = 4;
const PLAYER_ANIM_RIGHT = 5;
const PLAYER_ANIM_RIGHT_OUT = 6;

const STARTING_STANDS_SCALE_BONUS = 0.74;

var NUM_LEVELS;
var OPPONENT_FINAL_Y = 1200;
const TIME_OPPONENT_RUN_0 = 2600;
const TIME_OPPONENT_RUN_1 = 800;
var TIME_OPPONENT_RUN = 3000;
var HERO_ACCELERATION;
var HERO_FRICTION;
var MAX_HERO_SPEED;
var MIN_START_X = CANVAS_WIDTH/2 - 50;
var MAX_START_X = CANVAS_WIDTH/2 + 50;
var MIN_ARRIVAL_X = -300;
var START_X_INTERVAL = (MAX_START_X-MIN_START_X);
var MAX_ARRIVAL_X = CANVAS_WIDTH+300;
var ARRIVAL_X_INTERVAL = (MAX_ARRIVAL_X-MIN_ARRIVAL_X);
var MIN_PLAYER_X = 180;
var MAX_PLAYER_X = CANVAS_WIDTH-180;

var NUM_COLS_PAGE_LEVEL = 6;
var NUM_ROWS_PAGE_LEVEL = 2;
var GAME_NAME = "downhill_ski";
var SOUNDTRACK_VOLUME_IN_GAME  = 0.4;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;