console.log("Ejecutando JS...");

const secretkey = []; //Array vacio para almacenar la clave

function getRandomInt(max) { //Genera un numero entero aleatorio 

  return Math.floor(Math.random() * max); 
}

for (let i = 0; i<4; i++){ //se ejecuta 4 veces, ya que queremos una clave de 4 numeros 

  let rnum = getRandomInt(10); //En cada iteraccion se genera un numero entre el 0 y el 9 (el 10 no se incluye)
  secretkey.push(rnum.toString());//Se convierte en una cadena de texto antes de añadirlo al array

}

for (let j = 0; j < secretkey.length; j++) { //Se imprime en la consola el numero generado
  console.log(j + ' Secret Key '  + secretkey[j])
}

//-- Elementos de la interfaz del juego

clave1 = document.getElementById("clave1");
clave2 = document.getElementById("clave2");
clave3 = document.getElementById("clave3");
clave4 = document.getElementById("clave4");
start = document.getElementById("start");
display = document.getElementById("display");

clave1.innerHTML = "*";
clave1.style.color = "red";

clave2.innerHTML = "*";
clave2.style.color = "red";

clave3.innerHTML = "*";
clave3.style.color = "red";

clave4.innerHTML = "*";
clave4.style.color = "red";

//Estados del Juego
const ESTADO = {
  INIT: 0,
  ADIVINANDO: 1,
  CORRECTO: 2,
}

let estado = ESTADO.INIT;

function juego(digito) {
  if (estado == ESTADO.INIT){

    estado = ESTADO.ADIVINANDO;
    console.log("El juego ha comenzado");
    display.innerHTML = crono.start();
    
  }

  if (estado == ESTADO.ADIVINANDO){
      if (secretkey[0] == digito) {

        clave1.innerHTML = digito;
        clave1.style.color = "green";

      } else if (secretkey[1] == digito) {

        clave2.innerHTML = digito;
        clave2.style.color = "green";
          
      } else if (secretkey[2] == digito) {

        clave3.innerHTML = digito;
        clave3.style.color = "green";

      } else if (secretkey[3] == digito) {

        clave4.innerHTML = digito;
        clave4.style.color = "green";
      }     
  }

  if (clave1.innerHTML === secretkey[0] &&
    clave2.innerHTML === secretkey[1] &&
    clave3.innerHTML === secretkey[2] &&
    clave4.innerHTML === secretkey[3]) {
  estado = ESTADO.CORRECTO;
  console.log("¡Has adivinado la clave!");
  // Detener el cronómetro (debes implementar esta parte)
  crono.stop();
}
}

digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {

  boton.onclick =  function() {
    juego(boton.innerHTML);
  }
}

