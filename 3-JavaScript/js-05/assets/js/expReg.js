//Expresiones regulares
//Permite buscar información
//Permite busca una cadena de carácteres dentro de otra
//En JavaScript, las expresiones regulares también son objetos
//
//Se emplean para:
//-Búsqueda y reemplazo de un patrón en una cadena
//-Validación de campos en un formulario
//
//Estructura:
//1. Declaración variable:
//        var re = /ab+c/;
//2. Llamando a la función constructora del objeto:
//        var re = new RegExp('ab+c');


let texto = "hoy parece que va a salir el sol";
let texto1 = "la espero en el aeropuerto de LA";
let texto2 = "te marqué anoche";
let texto3 = " o =39";

let buscar = /sol/;
//let buscar = /[1-5];
//let buscar = /[eo]/;

console.log(buscar.text(texto));


