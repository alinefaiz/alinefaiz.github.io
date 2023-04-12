var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 510;
var ctx = canvas.getContext('2d');
var bg = new Image();
var turtle = new Image();
var fg = new Image(); 
var malina = new Image();

bg.src = "fon.jpg";
turtle.src = "turtle.png"; 
fg.src = "fon1.jpg"; 
malina.src = "malina.png";

document.addEventListener("keydown", moveUp);//клавиши

function moveUp(e) {
 switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(xPos>-30) xPos-=15;
            break;
        case 39:   // если нажата клавиша вправо
            if(xPos < 500 )
                xPos+=15
            break;
}
}

var p=[];//массив малин
p[0]={
x : Math.floor(Math.random()*550)+1,
y : -50
}

var score = 0;//счет
var xPos = 250;//позиция черепашки
var yPos = 355;

function draw(){
ctx.drawImage(bg,0,0,600,510);

for(var i = 0;i<p.length;i++){
ctx.drawImage(malina,p[i].x,p[i].y,50,50);
if(score>=10 && score<20){p[i].y+=3;}else
if(score>=20 && score<30){p[i].y+=4;}else
if(score>=30 && score<40){p[i].y+=5;}else
{p[i].y+=2;}
 
if(p[i].y==400 ){p.push({
x : Math.floor(Math.random()*550)+1,
y : -50});}

if( (p[i].y+50==404 || p[i].y+50==405)&& p[i].x>=xPos && p[i].x+50<=xPos+120 
){score++;p[i].x=Math.floor(Math.random()*550)+1;p[i].y=-50;
}
if (p[i].y+50==480 || p[i].y+50==479){alert("Your score: " + score);score=0; location.reload();}
}
ctx.drawImage(fg,0,470);
ctx.drawImage(turtle,xPos,yPos,120,120);


 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Score: " + score, 10, canvas.height - 20);

 requestAnimationFrame(draw);
}

malina.onload = draw;
