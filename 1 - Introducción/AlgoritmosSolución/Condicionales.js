//alert("HolaMundo");

//control de flujo


/* let nombre = "Aline Ortiz"
let edad = 20; */

//Recibir datos de usuario

let nombre = prompt("Escribre tu nombre");
console.log(nombre);


// casteo - convertir un dato
let edad = parseInt(prompt("Escribe tu edad"));
console.log(typeof edad);


if(nombre === "Aline Ortiz" && edad === 20) {
    console.log("Eres una")
    console.log("admin"); 



} else if (nombre === "Maria" || nombre === "Magali") {

     console.log("Eres una mentora");

} else if (nombre === "Jonathan" || nombre === "Raúl") {

     console.log("Eres un instructor");

} else if (nombre === "Marina") {
    
    console.log("Eres la jefa"); 

} else {
    
    console.log("Escribiste mal el nombre");

}

console.log("Fin del programa");