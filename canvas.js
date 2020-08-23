var canvas, width, height, ctx, fillStyle, lineWidth;;


function createCanvas(w,h){
    canvas = document.createElement("CANVAS");
    width = parseInt(w);
    height = parseInt(h);
    canvas.setAttribute('width',w);
    canvas.setAttribute('height',h);
    console.log(canvas);
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
}

function background(){
    ctx.beginPath();
    let r = 0,g = 0,b = 0,a = 255;
    switch(arguments.length){
        case 1: 
            r = arguments[0];
            ctx.fillStyle = "rgb("+r+","+r+","+r+")";
            break;
        case 2: 
            r = arguments[0];
            a = arguments[1];
            ctx.fillStyle = "rgba("+r+","+r+","+r+","+a+")";
            break;
        case 3: 
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            ctx.fillStyle = "rgb("+r+","+g+","+b+")";
            break;
        case 4:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            a = arguments[3];
            ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
            break;

    }
    ctx.rect(0, 0, width, height);
    ctx.fill();
}

setup();
var frameRateVal = 5;

var drawloop = setInterval(draw,1000/frameRateVal);
draw();

function floor(r){
    return Math.floor(r);
}

function createVector(x,y){
    return {x:x,y:y};
}

function random(){
    return Math.random()*(arguments[0]+1);
}
function noLoop(){
    clearInterval(drawloop);
}
function scale(r){
    console.log(r);
    ctx.scale(r, r);
}

function fill(){
    // console.log(arguments);
    let r = 0,g = 0,b = 0,a = 255;
    switch(arguments.length){
        case 1: 
            r = arguments[0];
            fillStyle = "rgb("+r+","+r+","+r+")";
            break;
        case 2: 
            r = arguments[0];
            a = arguments[1];
            fillStyle = "rgba("+r+","+r+","+r+","+a+")";
            break;
        case 3: 
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            fillStyle = "rgb("+r+","+g+","+b+")";
            break;
        case 4:
            r = arguments[0];
            g = arguments[1];
            b = arguments[2];
            a = arguments[3];
            fillStyle = "rgba("+r+","+g+","+b+","+a+")";
            break;
    }
}

function noStroke(){
    lineWidth = 0;
}
function rect(x,y,w,h){
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.rect(x, y, w, h);
    ctx.fill();
    if(lineWidth !=0) 
    ctx.stroke();
    ctx.closePath();
}

function frameRate(r){
    frameRateVal = r;
}

window.addEventListener('keyup',e=>keyPressed(e.key));

// function setup(){
//     createCanvas(200,200);
// }

// function draw(){
//     background(255,0,0,100);
// }