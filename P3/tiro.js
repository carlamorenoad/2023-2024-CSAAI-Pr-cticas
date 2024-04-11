console.log("Ejecutando JS...");

const canvas = document.getElementById("ctiro");

//-- Acceder al botón de disparo
const Disparar = document.getElementById("Disparar");

//-- Acceder al botón de inicio
const Iniciar = document.getElementById("Iniciar");

const ctx = canvas.getContext("2d");

//-- Definir el tamaño del canvas
canvas.width = 1800;
canvas.height = 500;

const range = document.getElementById("range");
const range1 = document.getElementById("range1")
const range_disp = document.getElementById("range_disp");
const range_disp2 = document.getElementById("range_disp2");
//const display = document.getElementById("display");

range.oninput = () => {
  range_disp.innerHTML = range.value;
  angulo = range.value;
}

range1.oninput = () => {
  range_disp2.innerHTML = range1.value;
  velp = 0.1 * range1.value;
}

function getRandomXO(min, max) {
    return x = Math.floor((Math.random() * (max - min + 1)) + min);
}

//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 445;
let xp = xop;
let yp = yop;

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = getRandomXO(xomin,xomax);
let yo = 470;

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}

//-- función para pintar el objetivo
function dibujarO(x,y) {

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'blue';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
}

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "purple"); // Pintar el proyectil

//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

let t = 0;
//-- Función principal de actualización
function lanzar() {

  //-- Implementación del algoritmo de animación:
  //-- 1) Actualizar posición de los elementos
  g = 0.1*9.8;
  velx = velp*Math.cos((angulo*Math.PI)/180); //Velocidad eje x
  vely = velp*Math.sin((angulo*Math.PI)/180); //Velocidad eje y

  xp = xp + velx*t;
  yp = yp - vely*t + 0.5*g*t*t;

  //-- Detectar colisión con el borde inferior del lienzo
  if (yp + 50 > canvas.height) { // El proyectil llega al borde inferior
    vely *= -1; // Invertir la velocidad en el eje y para simular el rebote
    yp = canvas.height - 50; // Ajustar la posición para que el proyectil no se escape del lienzo
  }

  t += 0.1;
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarP(xp, yp, 50, 50, "pink"); // Pintar el proyectil
  dibujarO(xo,yo); // Pintar el objetivo

  //-- 4) Repetir
  requestAnimationFrame(lanzar);

}

//-- Función de retrollamada del botón de disparo
Disparar.onclick = () => {
  crono.start();
  lanzar();
}

//-- Función de retrollamada del botón iniciar
Iniciar.onclick = () => {

  //Reinicio
  location.reload();

  // Pintar el proyectil
  dibujarP(xop, yop, 50, 50,"purple");
  crono.reset(); 
  
}


const crono = new Crono(display);