/* Hoy estamos en la semana 5. Segundo día.
Repaso de JV. Aprenderemos tipos de datos primitivos y tipos de variables.*/

'use strict'
//Javascript de forma estricta

/*Estos son los tipos de variables: */

let a; /* Se usa para declarar la mayoría de las variables. Local */
const b = 0; /* Es una constante que nunca cambia. No se le reasignan valores. Local */
var c; /* Es global pero casi no se recomienda usar para evitar reasignaciones de variables */

/*Scope - contexto: espacio en el que vive la variable*/

/*Estos son los tipos de datos primitivos: */

/*String: cadena de texto*/
let cadena = "Hola Mundo!";

//Number
let number = 5;
let numero1 = 5.89;
let numero3 = -5.89;

let nombre = "Aline";

/* Plantilla literal: let presentacion = '';
¿Para qué la usamos? Es una cadena de texto pero con la parti-
cularidad que ejecuta el código texto */

console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);

/*Estructura de un arreglos - matrices - arrays */

let arr = [1, "A", null, undefined, [true, false]];
console.log(arr[4][0]); /*Notación de corchete, nos permite saber la posición del valor de cada arreglo, en este caso es 'true' */

let arr2 = new Array ("B", 2); /*Otra manera de estructurar un arreglo */
console.log(arr2);

if (arr [4][0] === true) {
    console.log("es verdad")
}

/*Estructura de un objetos*/
// Clave / valor 

const persona = { nombre : 'Aline',
              edad : 31,
              hobbies : [
                        "leer",
                        "ver series",
                        "hacer tae"
                    ],
              auto : {
                     marca: "VW",
                     modelo : "Pointer",
                     year : 2000
              },
              saludar: function () {
                return "saludar"
              }

};

//Notación de punto

console.log(`Mi nombre es ${persona.nombre}`); /*Usando la plantilla literal */
console.log (`Mi hobbie favorito es ${persona.hobbies[1]}`); 
console.log(`La marca de mi carro es ${persona.auto.marca}`); 
console.log(`La acción que realizo es ${persona.saludar()}`); 





