let canvas;
let canvasWidth = 500;
let canvasHeight = 500;
let randomX1, randomX2, randomY1, randomY2;
let randomNumA;
let randomNumB;

function setup() {
    colorMode(HSB);
    canvasWidth = document.getElementById('myCanvas').clientWidth;
	canvasHeight = document.getElementById('myCanvas').clientHeight;
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('myCanvas');
    loadNewSketch();
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
  }
  
  function saveSketch() {
    saveCanvas(canvas, 'You\'reWelcome', 'jpg');
  }

