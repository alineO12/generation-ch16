//Más métodos de los arreglos
//Propiedades de los arrglos: lenght: el número de elementos que tiene


//Método sort () 
//Qué hace: ordena los elementos de un arreglo 

const arr = ["X", "A", "H", "a", "W", "b"];
console.log(arr);
arr.sort();
console.log(arr)
//
//
const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
console.log(arr2);
arr2.sort();
console.log(arr2);
//
//
const arr3 = [5, 1231, 567, 1, 80]; //declaro constante
console.log(arr3); //mando a imprimir
arr3.sort((a,b) => a - b); //usando un método con función flecha
                         //ordenando números de forma descendente
console.log(arr3); //mando a imprimir, aparecen en orden  
//
//                    
const arr4 = [4034, 50349534, 4903, 484, 484];
console.log(arr4);
arr4.sort((a,b) => b - a); //método con función flecha: ordeno de mayor a menor
console.log(arr4);
//
//
//.forEach







//función declarada
//función expresada
//función flecha 