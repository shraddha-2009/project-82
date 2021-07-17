canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="";
var last_position_x,last_position_y;
var current_position_of_mouse_x,current_position_of_mouse_y;
var colour="black";
var width=3;
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    mouseevent="mousedown";
    colour=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
current_position_of_mouse_y=e.clientY - canvas.offsetTop;
if (mouseevent == "mousedown")
ctx.beginPath()
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2*Math.PI)
ctx.stroke()
}