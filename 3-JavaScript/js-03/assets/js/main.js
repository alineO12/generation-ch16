//Bucles: estructura que nos permite repetir nuestro código

//Tipos de bluces o ciclos


//-Bucle for
//Es un ciclo controlado

//Se le tiene que indicar lo siguiente:

//     1.La variables con la que va a trabajar, puede ser
//                   i, j, k, l
//     2.Condición para que se ejecute
//     3.El cambio de nuestra variable de trabajo


for(let i = 0; i < 10; i++ ) {
    console.log("El valor de i es " + i);

}

//Si queremos agregar que el bucle vaya de dos en dos

for(let i = 0; i < 10; i= i+2 ) {
    console.log("El valor de i es " + i);

}

//-Bucle while (mientras)
//Es un ciclo no controlado
// Se utiliza para repetir instrucciones hasta que se cumplan


// Se le tiene que indicar lo siguiente:

//        1. Una condición - - -> True o False

while (false) {
    console.log("Loop infinito");
}

let saludo; 
while (saludo !== "Hola") {
    saludo = prompt("Saludame")
}
