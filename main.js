canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent="empty";
var lastx, lasty;
color="black";
var width=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    width = document.getElementById("width").value;
console.log(width);
   mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
   mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
   mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
  currentx=e.clientX-canvas.offsetLeft;
  currenty=e.clientY-canvas.offsetTop;

  if(mouseEvent=="mouseDown"){

    console.log("Current position of X and Y are");
    console.log("x = " + currentx + "y = " + currenty);

      ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("Last position of X and Y are");
console.log("x = " + lastx + "y = " + lasty);
ctx.moveTo(lastx, lasty);
ctx.lineTo(currentx, currenty);
ctx.stroke();
  }

  lastx=currentx;
  lasty=currenty;
}

var screenwidth = screen.width;
var newwidth = screen.width - 70;
var newheight = screen.height - 300;

if (screenwidth < 992) {
   document.getElementById("myCanvas").width = newwidth;
   document.getElementById("myCanvas").height = newheight;
   document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touchstart);
function touchstart(e) {
   color = document.getElementById("color").value;
   console.log(color);
   width = document.getElementById("width").value;
   console.log(width);
   console.log("touchstart");
   lastx = e.touches[0].clientX - canvas.offsetLeft;
   lasty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchmove);
function touchmove(e) {
   currentx = e.touches[0].clientX - canvas.offsetLeft;
   currenty = e.touches[0].clientY - canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;
   console.log("Last position of X and Y are");
   console.log("x = " + lastx + "y = " + lasty);
   ctx.moveTo(lastx, lasty);
   console.log("Current position of X and Y are");
   console.log("x = " + currentx + "y = " + currenty);
   ctx.lineTo(currentx, currenty);
   ctx.stroke();

   lastx = currentx;
   lasty = currenty;
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
