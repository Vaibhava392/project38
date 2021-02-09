var backImage, cyber1, cyber2, player1, player2;
var players, ground, form
var playerCount;
var allPlayers;
var database, player;
var gameState = 0;

function preload(){
  backImage = loadImage("images/warp.png")
  cyber1 = loadImage("images/player image 1.png")
  cyber2 = loadImage("images/player image 2.png")
}
function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}