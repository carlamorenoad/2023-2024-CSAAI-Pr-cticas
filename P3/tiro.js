console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 1800;
canvas.height = 500;

const ctx1 = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");
const num1_disp = document.getElementById("num1_disp");

const range = document.getElementById("range");
const range1 = document.getElementById("range1")
const range_disp = document.getElementById("range_disp");
const range_disp2 = document.getElementById("range_disp2");

function random(min, max) {
    return x = Math.floor((Math.random() * (max - min + 1)) + min);
}

x = random(500,1700)

ctx1.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx1.arc(x, 450, 29, 0, 2 * Math.PI);
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 3;
    ctx1.fillStyle = 'blue';

    //-- Dibujar el trazo
    ctx1.stroke()

    //-- Dibujar el relleno
    ctx1.fill()
    
ctx1.closePath()

ctx2.beginPath();
  //-- cuya esquina superior izquierda está en (5,5)
  ctx2.rect(30,390, 100, 100);

  //-- Color de relleno del rectángulo
  ctx2.fillStyle = 'purple';

  //-- Mostrar el relleno
  ctx2.fill();

  //-- Mostrar el trazo del rectángulo
  ctx2.stroke();
ctx2.closePath()

range.oninput = () => {
    range_disp.innerHTML = range.value;
}

range1.oninput = () => {
  range_disp2.innerHTML = range1.value;
}