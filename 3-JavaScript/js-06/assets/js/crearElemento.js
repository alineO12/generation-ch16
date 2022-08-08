//Crear un elemento

const imagen = document.createElement("img");

//modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imágenes aleatorias de animales';


document.body.appendChild(imagen);
document.body.insertAdjacentElement("beforeend", imagen);

//-->Esta es la forma correcta de crear e insertar un elemento
//1. Crear elemento que contendrá la imagen

//2.Seleccionar el elemento padre
const padreImg = document.getElementById('padreImg');

//3.Crear el elemento
const imagen2 = document.createElement('img');

//4.Modificamos los atributos del elemento
imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = 'Imágenes de naturaleza';

//5. Insertar elemento
padreImg.appendChild(imagen2);

//Utilizr forEach para pintar datos

const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];
const listaFrutas = document.getElementById('frutas');

//Forma 1
//frutas.forEach((element) =>{

//    const li = document.createElement('li');
//    li.textContent = element
//    listaFrutas.appendChild(li);
//});

//Forma 2
frutas.forEach((el) => {
    listaFrutas.innerHTML += `<li>${el}</li>`;

})


