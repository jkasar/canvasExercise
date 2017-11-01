  /* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
										~SETUP~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

/* ----------------------------------------------
				~global variables~
------------------------------------------------*/
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var cx = 300;
var cy = 300;
var dx = 1;
var dy = 1;
var cr = 100;
var dr = 0;

//context= space where things are happening
//can pass weg-gl or 2d

/* ----------------------------------------------
				~functions~
------------------------------------------------*/
function resizeCanvas(){
	canvas.width = innerWidth;
	canvas.height = innerHeight;
}

function keyPress(eve){
	if(eve.charCode == 115){
		saveImage(canvas, 'circle.png');
	}
}



/* ----------------------------------------------
				~event listeners~
------------------------------------------------*/

window.addEventListener('resize', resizeCanvas);
window.addEventListener('keypress', keyPress);
//window.addEventListener('resize', anotherFunction); can attach multiple
//-functions to the same event
//can add event listener to any html piece, takes two fucntions, event to listen
//and functino to run when that happens


/* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
					~DRAW~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/
function draw(){

	//ctx.fillStyle = 'rgb(0,0,50)';
	//ctx.fillRect(0,0, canvas.width, canvas.height);
	//ctx.lineWidth = 30;
	//ctx.strokeStyle = 'rgb(255,0,0)';
	//ctx.strokeRect(0,0, canvas.width, canvas.height);
	cx += dx * 10;
	cy += dy * 10;

	if (cy >= canvas.height -cr || cy <= cr  ){
		dy = -dy;
	}

	if (cx >= canvas.width -cr || cx <= cr ){
		dx = -dx;
	}

	dr += 0.05;
	var r = Math.abs(Math.sin(dr) * cr);
	//var sin = Math.sin(50);
	circle(ctx, cx, cy, r);
	//ctx.fillStyle = 'rgba(0,0,0, 0.1)';
	//ctx.fillRect(0,0, canvas.width, canvas.height);
	requestAnimationFrame(draw);
}

// setTimeout(function(){
// 	saveImage(canvas, 'circleTry.png');
// 	console.log("worked");
// }, 5000);


resizeCanvas();
draw();
