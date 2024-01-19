let c = document.getElementById("canvas");
let ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;
function makeCircle(i,r,j){
  if(i+=1)
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.arc(c.width/2,c.height/2,r,i,Math.PI*j);
  ctx.stroke();
  ctx.closePath();
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowColor = "blue";
}

let r = 0;
function draw(){
  if(r<=300){
  // ctx.clearRect(0,0,c.width,c.height);
    x = Math.random()*10;
    y = Math.random()*5;
    makeCircle(x,r,y);
    r+=10;
    setTimeout(draw,10);
    // if(r==300){
      // r = 0; 
    // }
  }
}
draw();
