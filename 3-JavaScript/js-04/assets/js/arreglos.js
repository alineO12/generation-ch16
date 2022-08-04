//Arreglos

//Colección de elementos
//Cada elemento ocupa una posición
//Esa posición se conoce como índice y comienza a partir de 0
//Tiene propiedades y métodos
//Propiedades - describen
//Métodos - acciones que puede realizar

//Estructura:

let aline = [];
console.log(aline);

//Ejemplo:

let arr = [1, 2, 3, 4];
console.log(arr[2]);
arr[1] = 190; 
arr[2] = "Hola";
console.log(arr);

//Métodos de arreglos

const arreglo = ["adiós"];

arreglo.push(2); //push: agrega elementos al final
arreglo.push(true);

let numero = 500;
arreglo.push(numero);

console.log(arreglo);

//

arreglo.unshift("A"); //unshiftt: agrega elementos al inicio
arreglo.unshift("B");

console.log(arreglo);

//

arreglo.pop(); //pop: quita el elemento del final del arreglo
console.log(arreglo);

let dato1 = arreglo.pop(); //pop, también, devuelve el dato eliminado
console.log(dato1);

//

arreglo.shift (); //shift: quitar un elemento del inicio del arreglo
console.log(arreglo);

let dato2 = arreglo.shift (); //shift, también, devuelve el dato eliminado
console.log(arreglo);

//

arreglo.splice(1, 0, "Aline", "Conejo", "Danzante")
//splice: qué indica en este caso, el 1, 0, y "Aline", "Conejo" y "Danzante"
// (posición de inicio,
//  cantidad de elementos a afectar,
//  elementos que queremos insertar);
console.log(arreglo);


//Hasta aquí hemos trabajado los métodos con base en el primer
//arreglo, por lo que se ha modificado. 

//Pero, también, existen métodos que no modifican el 
//arreglo original

//Hacen una copia, modifican esa copia

//Por ejemplo, el método slice ()
//Qué hace: corta partes de un arrglo

arreglo.slice();
console.log(arreglo);

let dato3 = arreglo.slice(0,2);
console.log(dato3);


