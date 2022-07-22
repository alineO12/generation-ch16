/*Para agilizar los procesos de una empresa se necesita desarollar
un algoritmo que permita calcular el sueldo de un emplead@ por 
semana y por mes. Como dato tenemos su sueldo diario ($600) y
como salida se debe imprimir el nombre y el dinero que recibirá por
semana y por mes.

Calcular sueldo de empleado por semana y por mes 
con funciones*/

function calculadoraSueldo() {
    let nombre = prompt("¿Cuál es tu nombre?");
console.log(nombre);
 
const sueldo = 600
const diasSemana = 6
const semanasMes = 4

console.log("Sueldo semanal: "+(sueldo * diasSemana));
console.log("Sueldo mensual: "+(sueldo * diasSemana * semanasMes));
}

calculadoraSueldo()