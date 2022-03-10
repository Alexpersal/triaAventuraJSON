let readlineSync = require("readline-sync");
console.log("Se te va a realizar una simple pregunta");

let resp = readlineSync.question("Quieres continuar? [s/n]: ");

while (resp !== 's' && resp !== 'n'){
    console.log("No es una respuesta válida, ha de introducir [s/n]:");
    resp =readlineSync.question("Quieres continuar? [s/n]: ");
}
    if (resp === 's') console.log("Fin de la historia"); else console.log("Adeu");

    

