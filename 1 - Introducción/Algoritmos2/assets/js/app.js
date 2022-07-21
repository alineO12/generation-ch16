/* function saludar ( ) {
    console.log("Hola mundo");
}

//saludar ();

//Arreglos; la primera opción es la más utilizada

let num = [];
console.log(num);

//Otra manera de hacer un arreglo

//let arr1 = new Array();
//console.log(arr1);

//¿Cómo podemos usar un arreglo?

const arr = [1, 2, 3, 4, 5];
//notación de corchetes []
console.log(arr[3]);

arr[5] = 25; //otra forma de agregar arreglos
arr[6] = 8;
arr[10] = 40;
console.log(arr);

//Un array tiene propiedades y métodos:
//Propiedaddes de los arreglos
//-Son descripciones de los objetos

console.log(arr.length); //Ejemplo: descripción de un objeto: "length"

//También, tenemos métodos
//-Acciones en los arreglos, lo que podemos hacer
//-Página mozilla te muestra cómo utilizar los métodos
//Utilizando método "push"
//Push () permite agregar un valor al final del arreglo

const frutas = ["Manzana", "Plátano"];
console.log(frutas);

frutas.push("Naranja");

console.log(frutas);

//También, tenemos otro método pop () elimina el último
//elemento de un array y lo devuelve.
//¿Qué significar devolver)

//Usando pop()

let elementoBorrado = frutas.pop(); //Devolver

frutas.pop();
console.log(frutas);
console.log(elementoBorrado); //Devolver 

//unshift ()
//Qué hace: agrega un elemento al inicio del arreglo y lo devuelve

let devolver = frutas.unshift("Uva", "Pera", "Sandía");
console.log(frutas);
console.log(devolver);

//shift ()
//Qué hace: elimina un elemento del inicio del array

let frutaQuitada = frutas.shift(); //devolver, quitar
console.log(frutas);
console.log(frutaQuitada); //devolver


//splice () elimina elementos existentes y/o agregando elementos
//Vamos a hacer el ejercicio



const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//personas.splice(1, 1, "Beto"); //notación en corchete, es parecida
personas.splice(1, 1,);
console.log(personas);

personas.splice(2, 1);
console.log(personas);

personas.unshift(personas.splice(1,1)[0]);
console.log(personas);

//IndexOf

console.log(personas.indexOf("Maria"));
console.log(personas.indexOf("Aline")); */

//arrglo multidimensional

const newArr = [1, 45, "Hola", "Adiós", true, null, [
    30, 31, 32], [ "Azul", "Amarillo", "Verde"]]; //podemos agregar strings, booleanos, null, undefined
//y también podemos arreglo un arreglo dentro de un arreglo

console.log(newArr);
console.log(newArr[6][1]);
console.log(newArr[7][1]);

//Objetos
//Estructura especial llamada objeto
//nos permiten guardar pares de valores
// key - value
//llave - valor



const obj = { 
              nombre : "Pedro",
              edad : 25,
              color : "Azul",
              pasatiempo : ["Leer", "Correr"],
              newArr : newArr //Llamar un arreglo anterior
}; 


//mostrar valores
console.log(obj.edad);
console.log(obj.pasatiempo[1]);




