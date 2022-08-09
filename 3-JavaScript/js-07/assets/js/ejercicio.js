/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/

`use strict`

//URLs para consumir

const urlAleatorios = "https://api.thecatapi.com/v1/images/search";

//Elementos del DOM

const imagenPerrito = document.getElementById("imgPerrito");
console.log(imgPerrito);

const btn = document.getElementById("btn-perrito")
console.log(btn)

//Eventos
btn.addEventListener("click", ( ) => {
    console.log("Boton presionado");

    //Agregar la funcionalidad
    obtenerPerritoAleatorio(urlAleatorios)


})

//Funciones
async function obtenerPerritoAleatorio () {

    const respuesta = await fetch(urlPerrito)
    const datos = await respuesta.json()


    console.log(datos);
    console.log(datos[0].url);

    imagenPerrito.src = datos[0].url;
    
}

//obtenerPerritoAleatorio(urlAleatorios)

