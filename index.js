/*const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 20;
  context.strokeStyle = "#000";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};*/

function draw() {
  var canvas = document.getElementById('main-canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 20;
    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
    
  }
}

//mainCanvas.addEventListener("mousedown", mouseDown);
//mainCanvas.addEventListener("mouseup", mouseUp);

function ejercicio1(){
  ej1=document.getElementById("lienzo1"); //Asigno a una variable el elemento del html que voy a usar
  lienzo1=ej1.getContext("2d"); //Alisto el canvas para que funcione
  lienzo1.lineWidth=5; //Defino el ancho de la linea en pixeles
  lienzo1.strokeStyle = '#F7ACA6'; //Defino el color en hexagesimal
 
//EJEX
  lienzo1.beginPath(); // Pongo el lápiz
  lienzo1.moveTo(150,0); // lo ubicó para iniciar el dibujo
  lienzo1.lineTo(150,300); // trazo la linea hasta este punto
  lienzo1.stroke(); // levanto el lápiz
  lienzo1.closePath(); // me alisto para realizar otra parte del dibujo
//EJE Y
  lienzo1.beginPath(); // Pongo el lápiz
  lienzo1.moveTo(0,150);// lo ubicó para iniciar el dibujo
  lienzo1.lineTo(300,150);// trazo la linea hasta este punto
  lienzo1.stroke();// levanto el lápiz
  lienzo1.closePath();// me alisto para realizar otra parte del dibujo
 }
 function draw() {
  var canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Círculo externo
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Boca (contra reloj)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Ojo izquierdo
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Ojo derecho
    ctx.stroke();
  }
}

 //ejercicio1();
 draw();
