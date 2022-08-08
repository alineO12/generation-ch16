//DOM (Document Object Model)
//Tipos de métodos
//En el DOM, los 3 métodos más comunes son:

//  .getElementById()
//  Qué hace: devuelve el elemento que tiene
//  el atributo ID con el valor especificado.
//  Text content (nos muestra el contenido que hay en párrafo)

console.log(document.getElementById('parrafo1').textContent);

const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";
console.log(parrafo1.textContent)

parrafo1.style.color = 'red';
console.log(parrafo1.style);
//
//
//
//  .querySelector()
//  el primer descendiente del elemento sobre el cual 
//  es invocado que coincida con el o los selectores 
//  especificados. 
//  etiqueta = p
//  clase = .parrafo
//  id = #parrafo1
const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += "Modificando el contenido desde JavaScript";
//
//
//
//  .querySelectorAll() 
//  nos regresa una lista de nodos (nodelist) con las características
//  que le especificamos
const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem"
//
//
//
//Modificar los atributos de html
const enlace = document.getElementById('enlace');
console.log(enlace);

enlace.href = 'https://www.youtube.com/'; //cambiar atributos
enlace.taget = "_blank";
enlace.textContent = 'Enlace de Youtube';
//
//
//
//Ejercicio: modificar 3 elementos 
parrafos[1].style.fontSize = ".5rem"
console.log(parrafos[1]);

//
//
//
//Reemplazar contenido

const parrafo4 = document.getElementById('parrafo4');
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); //muestra el html que haya en 
//en el interior del elemento
console.log(parrafo4.outerHTML);//muestra
//el contenido html, incluyendo al elemento
//parrafo4.innerHTML = '<a href = "http://google.com">Enlace de Google</a>'; //reemplza el contenido del elemento

//parrafo4.outerHTML = '<a href = "http://google.com">Enlace de Google</a>'; //reemplaza elemento completo

//parrafo4.innerHTML = '<div class="elemento">Este es un div </div>';

//Js permite modificar las clases css
//Utilizando style

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add('elemento');

//Usando método classList

const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');
}

cambiarColor();// se agrega la clase
cambiarColor();// se quita la clase