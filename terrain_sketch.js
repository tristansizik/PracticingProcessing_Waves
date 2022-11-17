/*	Source: https://www.youtube.com/watch?v=IKB1hWWedMk
 *
 */

var cols,rows;
var scl = 20;
var flying = 0;

let w = 1600;
let h = 1000;

var terrain ;

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x,y);
}

function setup() {
	cnv = createCanvas(windowWidth,windowHeight, WEBGL);
	centerCanvas();
	cols = w /scl;
	rows = h /scl;

	terrain = new Array(cols);
	for (let c = 0; c < cols; c++){
		terrain[c] = new Array(rows);
	}
}

function draw() {
	
	flying -= 0.05;
	var yoff = flying;
	for (let y = 0; y < rows-1; y++) {
		var xoff = 0;
		for (let x = 0 ; x < cols; x++) {
			terrain[x][y] = map(noise(xoff,yoff),0,1,-150,150);
			xoff +=0.2;
		}
		yoff +=0.2;
	}

	background(0);

	stroke(255);
	noFill();

	translate(-windowWidth/3,-windowHeight/3+200);
	rotateX(PI/3);
	
	for (let y = 0; y < rows; y++) {
		beginShape(TRIANGLE_STRIP);
		for (let x = 0 ; x < cols; x++) {
			vertex(x*scl, y*scl, terrain[x][y]);
			vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
		}
		endShape();
	}

}

function windowResized() {
	centerCanvas();
}

