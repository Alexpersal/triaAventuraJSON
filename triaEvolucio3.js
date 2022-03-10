let readlineSync = require("readline-sync");

function funciona() {
  console.log("Funciona?:");
  if (preguntaSiNo()) {
    console.log("No lo toques");
    sinProblema();
  } else loHasTocado();
}

function preguntaSiNo() {
  let resposta = readlineSync.question("(s/n): ");
  if (resposta === "s") return true;
  return false;
}

function loHasTocado() {
  console.log("BURRO!!");
  seSabe();
}

function seSabe() {
  console.log("Alguien lo sabe?");
  if (preguntaSiNo()) {
    console.log("La has cagado");
    culpar();
  } else seSabe();
}

function culpar() {
  console.log("Puedes culpar a otro?");
  if (preguntaSiNo()) sinProblema;
  else seSabe();
}

function daProblemas() {
  if (preguntaSiNo()) seSabe();
  else console.log("Lanzalo" + sinProblema());
}

function sinProblema() {
  console.log("Sin Problema");
}

funciona();
