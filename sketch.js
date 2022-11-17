function setup() {
	createCanvas(1400,800);
	frameCount = 20;
}

function draw(){
	background(0);
	fill(255);
	noStroke();

	let wave = sin(radians(frameCount));

	
	ellipse(width/2 + wave * 300,height/2 ,100,100);
}
