//alert("Hola Mundo 2"); comentario de una sola línea

/*


Comentario 
de 
bloque


*/

//Tema: Variables
//Las variables contienen un valor y un nombre, así podemos acceder a ese dato
//siempre que necesitemos

let miVariable = "Aline";
console.log(miVariable);

miVariable = "25";
console.log(miVariable);

const apellido = "Ortiz";
console.log(apellido);

//Tipos de datos primitivos que maneja JS:
//"String" (va entrecomillas); Number; True False; Null; Undefined

//-String (Dato primitivo JS)
//Repesenta texto corto

let variableCadena = "texto mas texto";
console.log(variableCadena);

//-Number - Número (Dato primitivo JS)
// 12345

let variableNumber = 3456;
variableNumber = variableNumber + 5;
console.log(variableNumber);

//Concatenación:
//unir dos cadenas de texto
//unir un texto con número
//si quiero sumar debo quitar comillas

let a = "1";
let b = "1";
console.log(a + b);

//-Boolean - booleano (Dato primitivo JS)
//Es un dato lógico
//Tiene dos valores true false

let verdadero = true;

let falso = false;
console.log(verdadero, falso);

//-Null - nulo (Dato primitivo JS)
//Es un valor vacío

let varNull = null;
/* console.log(varNull + 1);*/

//-Undefined - indefinido 
//Ausencia completa de valor
//Variable declarada pero sin asignación de...
//Valor, esa variable es undefined

let variable;
console.log(variable + 1);

//typeof (operador, forma parte del lenguaje que permite asignar un valor)

let num1 = 456;
console.log(typeof num1);

let varBool = true;
console.log(typeof varBool);

console.log(typeof "Hola");

console.log(typeof(123));

console.log(typeof null);



let nombre = "Pedro";
console.log("Mi nombre es:", nombre);
console.log("Mi nombre es:" + nombre);



let primer = "Aline";
console.log("mi nombre es:", primer);

let segundaNumber = "12"
console.log("mi número es:", segundaNumber);

let tercero = verdadero
console.log("¿Tienes perros?:" + true);