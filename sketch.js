var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
 var per1,per2,per3; 
 var per1Image,per2Image,per3Image
var ground,groundImage
 function preload()
 {
   per1Image = loadImage("../images/person2.png")
   per2Image = loadImage("../images/person1.png")
   per3Image = loadImage("../images/person3.png")
   groundImage = loadImage("../images/Road.png")
 }
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
