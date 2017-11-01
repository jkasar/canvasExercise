  /* -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
										~SETUP~
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_*/

/* ----------------------------------------------
				~global variables~
------------------------------------------------*/
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


//context= space where things are happening
//can pass weg-gl or 2d
/* ----------------------------------------------
				~functions~
------------------------------------------------*/

//var ball = new BouncyBall(canvas,100, 50);
//ball.bounce
//ball.cx;  100
//ball.cy;  100
var ballz = [];
// for (var i = 0; i < 2 ; i++) {
// 	var x = Math.random()*innerWidth/2 + innerWidth/4;
// 	var y = Math.random()*innerHeight/2 + innerHeight/4;
// 	var r = Math.random()*25;
// 	var b = new BouncyBall(canvas, x, y, r );
// 	ballz.push(b)
// }

function resizeCanvas(){
	canvas.width = innerWidth;
	canvas.height = innerHeight;
}
function keyPress(eve){

	if(eve.charCode == 115){
		//saveImage(canvas, 'circle.png');
		for (var i = 0; i < 1 ; i++) {
			var x = Math.random()*innerWidth/2 + innerWidth/4;
			var y = Math.random()*innerHeight/2 + innerHeight/4;
			var r = Math.random()*50;
			var b = new BouncyBall(canvas, x, y, r );
			ballz.push(b)
		}
	}
	if(eve.charCode == 100){
		//saveImage(canvas, 'circle.png');
		ctx.fillStyle = 'rgba(0,0,0, 0.1)';
		ctx.fillRect(0,0, canvas.width, canvas.height);
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

	for (var i = 0; i < ballz.length; i++) {
		ballz[i].update();
		ballz[i].draw();
	}
	//ctx.fillStyle = 'rgb(0,0,50)';
	//ctx.fillRect(0,0, canvas.width, canvas.height);
	//ctx.lineWidth = 30;
	//ctx.strokeStyle = 'rgb(255,0,0)';
	//ctx.strokeRect(0,0, canvas.width, canvas.height);

	//var sin = Math.sin(50);

	ctx.fillStyle = 'rgba(0,0,0, 0.1)';
	ctx.fillRect(0,0, canvas.width, canvas.height);
	requestAnimationFrame(draw);
}
resizeCanvas();
draw();
