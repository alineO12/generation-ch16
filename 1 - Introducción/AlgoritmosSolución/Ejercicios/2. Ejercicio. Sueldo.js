/*Calcular sueldo de empleado por semana y por mes 
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