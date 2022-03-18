const readlineSync = require("readline-sync");

const historia = [
  { text: "¿Funciona?:", si: 1, no: 2 },
  { text: "Sin Problema, ¿Quieres empezar de nuevo?", si: 0, no: 6 },
  { text: "¿Lo has tocado?", si: 4, no: 3 },
  { text: "¿Nos dará problemas?", si: 5, no: 1 },
  { text: "BURRO!!! ¿Alguien lo sabe?", si: 5, no: 1 },
  { text: "La has cagao, ¿Puedes culpar a otro?", si: 1, no: 5 },
  { text: "¡Adeu!", si: -1, no: -1 },
];

let paginaActual = 0;

while (paginaActual >= 0 && paginaActual < 6) {
  console.log(llegirPagina());
  let option = demanarOpcio();
  paginaActual = nextStep(option);
}

function llegirPagina() {
  return historia[paginaActual].text;
}

function demanarOpcio() {
  let opcioTriada = readlineSync.question(" si/no ");
  if (opcioTriada === "si" || opcioTriada === "s") return true;
  else if (opcioTriada === "no" || opcioTriada === "n") return false;
  else
    console.log(
      "No entiendo su respuesta. Por favor conteste con un si o un no"
    );
  return demanarOpcio();
}

function nextStep(seleccion) {
  if (seleccion) return historia[paginaActual].si;
  else return historia[paginaActual].no;
}
