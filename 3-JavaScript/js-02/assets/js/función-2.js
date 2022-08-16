/* function miFuncion (a,b) {
    return (a + b);
}
let resultado = miFuncion(3, 6);
console.log("El resultado es: " + resultado);

/* Función expresión o anónima */
// Operaciones aritméticas con funciones
// Primero caso de función anónima

let suma = function (a, b) { return (a + b) };
res = suma (2, 3);
console.log("La suma es : " + res); 

let multiplicacion = function (a, b) { return (a * b) };
res = multiplicacion (2, 3);
console.log("La multplicacion es : " + res); 

let division = function (a, b) { return (a / b) };
res = division (2, 3);
console.log("La division es : " + res); 

let resta = function (a, b) { return (a - b) };
res = resta (2, 3);
console.log("La resta es : " + res); 

//Segundo caso de función anónima
// Self Invoking 

(function (a, b) {
    console.log("El resultado de Self Invoking es : " + (a + b))
}
) (3, 4); 

