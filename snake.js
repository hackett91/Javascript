//settings https://www.youtube.com/watch?v=TRiT_Ks-yvk&list=RDTRiT_Ks-yvk
var snakeX = 2;
var snakeY = 2;
var height = 30;
var width = 30;
var interval = 100;
var increment = 1;

//game variables
var tailX = [snakeX];
var tailY = [snakeY];
var fx;
var fy;
var running;
var gameOver;
var direction = -1; //up = 0, down = -1, left = 1, right = 2
var int;

/*Entry point of the game
*/

function run() {
  init();
  int = setInterval(gameLoop, interval);

}
function init() {
  createMap();
  createSnake();
  createFruit();

}
/*
Generate the map for the snake
*/
function createMap() {
  document.write("<table>");

  for(var y = 0; y < height; y++){
    document.write("<tr>");
    for(var x = 0; x< width; x++){
      if(x == 0 || x == width - 1 || y ==0 || y == height-1){
        document.write("<td class = 'wall' id = '"+x+"-"+y+"'></td>");
        document.getElementById("")
      }else {
        document.write("<td class = 'blink' id = '"+x+"-"+y+"'></td>");

      }
    }
    document.write("</tr>");
  }

  document.write("<table>");
}
function createSnake() {
  set(snakeX, snakeY, "snake");

}
function get(x,y){
  return document.getElementById(x+"-"+y);
}
function set(x, y, value){
  get(x,y).setAttribute("class",value);
}
run();
