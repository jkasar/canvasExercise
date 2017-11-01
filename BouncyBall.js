/* jshint esversion: 6 */

class BouncyBall {
  constructor(canv,x,y,r){
    this.cx = x;
    this.cy = y;
    this.cr = r;
    this.range = r;
    this.dx = 1;
    this.dy = 1;
    this.dr = 0;
    this.canvas = canv;
    this.ctx = this.canvas.getContext('2d');
  }
  update(){
    this.cx += this.dx * 10;
  	this.cy += this.dy * 10;
  	if (this.cy >= this.canvas.height -this.cr || this.cy <= this.cr  ){
  		this.dy = -this.dy;
  	}
  	if (this.cx >= this.canvas.width -this.cr || this.cx <= this.cr ){
  		this.dx = -this.dx;
  	}
  	this.dr += 0.05;
  	this.cr = Math.abs(Math.sin(this.dr) * this.range );
  }
  draw(){
    this.ctx.fillStyle =  'hsl('+ 360*Math.random() +',100%,50%)';
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'hsl('+ 360*Math.random() +',100%,50%)';
    this.ctx.beginPath();
    this.ctx.arc(this.cx,this.cy,this.cr,0, Math.PI*2);
    this.ctx.closePath();
    this.ctx.fill();
    //this.stroke();

  }
}
