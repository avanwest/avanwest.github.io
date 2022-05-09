let canvas;
let canvasWidth = 500;
let canvasHeight = 500;
let randomX1, randomX2, randomY1, randomY2;
let myLinesA = [];
let myLinesB = [];
let randomNumA;
let randomNumB;
let colorA;
let colorB;
let colorC;
let myColors = [];
let newSketchButton;
let saveSketchButton;

// function preload() {
//   colombianHouseImg = loadImage('colombian_house.JPG');
// }

function setup() {
    colorMode(HSB);
    canvasWidth = document.getElementById('myCanvas').clientWidth;
	canvasHeight = document.getElementById('myCanvas').clientHeight;
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('myCanvas');
    loadNewSketch();

    // newButton = document.getElementsByClassName('newSketchButton');
    
    // newSketchButton = createButton('new');
    // newSketchButton.position(550, 50);
    // newSketchButton.mousePressed(loadNewSketch);
  
    // saveSketchButton = createButton('save');
    // saveSketchButton.position(550, 100);
    // saveSketchButton.mousePressed(saveSketch);
}

function loadNewSketch() {
    background(255);
    background(random(360), random(100), random(100), random(1));
    randomX1 = random(canvasWidth);
	randomX2 = random(canvasWidth);
	randomY1 = random(canvasHeight);
	randomY2 = random(canvasHeight);

	randomNumA = random(10);
	randomNumB = random(50);
	
    for (let i = 0; i < randomNumA; i++) {
      beginShape();
      fill(random(360), random(100), random(100),random(1));
      rect(random(canvasWidth), random(canvasHeight), random(canvasWidth), random(canvasWidth));
      endShape(); 
    }
    // image(colombianHouseImg, random(100), random(100), 300, 300);
  }
  
  function saveSketch() {
    saveCanvas(canvas, 'YourWelcome', 'jpg');
  }

