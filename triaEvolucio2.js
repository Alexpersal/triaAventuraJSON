let readlineSync = require("readline-sync");

function mostrar(){
    b = "Se te va a realizar una simple pregunta"
    return b;
   }
   
function preguntar(){
let resp = readlineSync.question("Quiere continuar? [s/n]: ");
return resp;
}

function continuar(resp){ console.log("Fin de la historia");}
function acabar(resp){ console.log("Adeu");}


console.log(mostrar());
let a = preguntar();
while (a != 's' && a != 'n'){
    a= preguntar();
}
if (a === 's') continuar(); else acabar();