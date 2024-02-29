console.log("Ejecutando JS...");

const elemento = document.getElementById("elemento");
const boton = document.getElementById("boton");

boton.onclick = () => {
  console.log("Clic!");

  //-- Cambiar color
  if (elemento.style.backgroundColor == "") {
    elemento.style.backgroundColor = "blue";
  }
  else {
    elemento.style.backgroundColor = "";
  }
  //elemento.style.backgroundColor = random_color()
}

function random_color (){
  //Calcula los valores rgb de manera aleatoria por separado
  //combina en un único color hexadecimal válido que es rcolor

  return rcolor
}