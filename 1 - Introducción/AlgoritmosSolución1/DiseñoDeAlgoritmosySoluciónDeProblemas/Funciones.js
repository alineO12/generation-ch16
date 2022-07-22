//alert("Funciones");

//Tema: Funciones
//Para crear una función debemos seguir la siguiente estructura:

/*function sumar (numero1, numero2) {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es:" + (numero1 + numero2));
}

 sumar(4,5);*/

//Ejercicio 2: utilizando funciones

function calculadoraSueldo (sueldoIngresado, diasTrabajados) {

/* let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = 600
const semanasMes = 4; 

console.log("Sueldo semanal: " + (sueldoIngresado * diasTrabajados));
console.log("Sueldo mensual: " + (sueldoIngresado * diasTrabajados * semanasMes));

return semanasMes;
}

let mes = calculadoraSueldo (100,2) ¨*/


// Función return
//Quiero acceder al dato, devolver parte de la información que quiero asignar
//Haremos una calculadora de porcentajes
// 0.6 = 60%

function calcularPorcentaje (numero, porcentaje) {

    let resultado = numero * (porcentaje / 100);

    return (resultado, numero, porcentaje); 

}

let porcentajeREsultado = calcularPorcentaje(100, 40)
console.log(porcentajeResultado);
