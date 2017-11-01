//create function for circles

function circle( context, x, y, r, color ){
	context.fillStyle =  'hsl('+ 360*Math.random() +',100%,50%)';
	context.lineWidth = 5;
	context.strokeStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
	context.beginPath();
	context.arc(x,y,r,0, Math.PI*2);
	context.closePath();
	context.fill();
	//context.stroke();
}
//using context instead of ctx. local vs global variables
//allows function to not be dependent of global variables
//independent functions
