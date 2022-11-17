/*	Source: https://www.youtube.com/watch?v=Th7m7QEeUbI&t=165s
 *
 */

var counter = 0;

function setup() {
	createCanvas(1920,1080);
	frameCount = 20;
}

function draw(){
//	background(0);
	
	counter++;
	if(counter == 10){
		background(0);
		counter = 0;
	}

	translate(width/2, height/2);
	noStroke();

	let mag = 400;
	let eSize = 25;

	
	for (let i = 0; i < 100; i++) {
		
		let wave_phase = map(sin(radians(frameCount)),-1,1,-100,100);

		let wave1 = map(tan(radians(frameCount*.8 + i + wave_phase)),-1,1,-100,100);
		let wave2 = map(cos(radians(frameCount+ i)),-1,1,-mag,mag);
		
		let c = map(sin(radians(frameCount*5 + i)), -1,1,0,255);	
		fill(c);
		rect(wave1,wave2,eSize,eSize);
	}
}
