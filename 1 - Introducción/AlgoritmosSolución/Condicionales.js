//alert("HolaMundo");


/* let nombre = "Aline Ortiz"
let edad = 20; */

//¿Cómo recibo datos de usuario? 
//Usa la siguiente función:

let nombre = prompt("Escribe tu nombre");
console.log(nombre);


//Casteo  
//Qué es: convertir un dato a números enteros
//Cuál es la función: parseInt

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