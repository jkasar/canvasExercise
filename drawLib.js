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

function saveImage(canv,imageName){
  // var image = canv.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // // here is the most important part because if you dont replace you will get a DOM 18 exception.
  // window.location.href=image;
  //var link = document.getElementById('link');
  var link = document.createElement('a');
  document.body.appendChild(link);
  link.style.display = "none";
  link.setAttribute('download', imageName );
  link.setAttribute('href', canv.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}
