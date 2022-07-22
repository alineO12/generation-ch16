/* function saludar ( ) {
    console.log("Hola mundo");
}

//saludar ();



//Tema: Arreglos



//Estructura de un arreglo:

let num = [];
console.log(num);

//Otra manera de hacer un arreglo (ya casi no se usa):

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

//Un array tiene propiedades y métodos
//Propiedaddes de los arreglos:
//-Son descripciones de los objetos

console.log(arr.length); //Ejemplo: descripción de un objeto: "length"

//Métodos de los arreglos:
//-Son acciones en los arreglos, lo que podemos hacer
//-Página mozilla te muestra cómo utilizar los métodos:
//-https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//Utilizando método "push"
//Qué hace: permite agregar un valor al final del arreglo

const frutas = ["Manzana", "Plátano"];
console.log(frutas);
frutas.push("Naranja");
console.log(frutas);

//Utilizando método "pop" 
//Qué hace: elimina el último elemento de un array y lo devuelve
//¿Qué significar devolver?

let elementoBorrado = frutas.pop(); //Devolver
frutas.pop();
console.log(frutas);
console.log(elementoBorrado); //Devolver 

//Utilizando método "unshift" ()
//Qué hace: agrega un elemento al inicio del arreglo y lo devuelve

let devolver = frutas.unshift("Uva", "Pera", "Sandía");
console.log(frutas);
console.log(devolver);

//Utilizando método shift ()
//Qué hace: elimina un elemento del inicio del array

let frutaQuitada = frutas.shift(); //devolver, quitar
console.log(frutas);
console.log(frutaQuitada); //devolver


//Utilizando método splice () 
//Qué hace: elimina elementos existentes y/o agregando elementos

//Ejercicio: practicar métodos en un array (el archivo se encuentra aparte)

//Arreglo multidimensional

const newArr = [1, 45, "Hola", "Adiós", true, null, [
    30, 31, 32], [ "Azul", "Amarillo", "Verde"]]; //podemos agregar strings, booleanos, null, undefined
//y también podemos agregar un un arreglo dentro de un arreglo

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




