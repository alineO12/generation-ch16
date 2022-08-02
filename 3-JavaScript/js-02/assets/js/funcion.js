/*Estructuras de una función: */

function miSuma (a, b) {
    let resultado = (a + b);
    console.log ("la suma es: " + resultado);
}
miSuma (2 + 3);



function miSuma (a, b) {
    console.log ("la suma es: " + (a + b));
}
miSuma(2, 3);



function miProducto (a, b) {
    return (a * b);
}
console.log("el producto es: " + miProducto (4, 5));



let resta;

function miResta (a, b) {
    return (a - b);
}
resta = miResta (10, 4);
console.log ("La resta es: " + resta)


/*Ejercicio: declara una función que imprima tu nombre completo */
let nombre = "Aline";
let apellidoPaterno = "Ortiz";
let apellidoMaterno = "Molina";

function darNombre(nombre, appellidoPaterno, apellidoMaterno) {
    nombre = nombre + apellidoMaterno + appellidoPaterno
    return (nombre);
}

console.log("Mi nombre completo es: " + darNombre(nombre, apellidoMaterno, apellidoPaterno));





