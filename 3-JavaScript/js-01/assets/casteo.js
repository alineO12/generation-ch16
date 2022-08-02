'use strict';

/* Conversión de tipos en JavaScript:
Casteo o parseo
*/

//Coersión de tipo de datos: convertir cadena de texto o datos booleanos (true que sería 1; false, 0) a número
//Conversión automática de datos: toma los datos y los convierte
//en valores que sean compatibles para realizar la operación arimética, solo si tenemos el dato en string y queremos usar una suma
let num = "5";
let num2 = "10";

//concatenación: el resultado de unir dos cadenas de texto
//también, podemos obtener ese resultado si unimor un número
//con una cadena de texto
console.log(num * num2);

/*Number ()*/

let num3 = Number("56");
console.log(Number(num3));

/*string () */

let num4 = String(0);
console.log(num4);
console.log(typeof (num4));

//Boolean ()
//Convierte número y cadenas a booleanos
// Si agregamos estos valores el resultado será falso: 0-; ""; null; undefined, Nan - 
// false -> porque son conocidos como faultsy values, tienden a ser falsos
//mientras que todos los demás números los convierte a true
let num5 = Boolean(1);
console.log(num5);
console.log(typeof num5);