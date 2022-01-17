canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";

ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150,150,430,200)
ctx.stroke();
circle(265,210,"blue")
circle(360,210,"black")
circle(455,210,"red")
circle(312,250,"yellow")
circle(407,250,"green")

function circle(x,y,c) {
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = 5;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
