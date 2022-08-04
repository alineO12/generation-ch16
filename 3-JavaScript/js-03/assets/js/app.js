//Control de flujo
//Indica que nosotros dirigimos nuestro código hacia un resultado

//Condicionales
// Empezaremos con la condicional If

let condicion = "A";

if(condicion === "A") {
    /*
       Código que se hace si se cumple la condición A
    */
     console.log("Entro en la condición A")

} else if (condicion === "B") {
    /*
       Código que se hace si se cumple la condición B
    */
       console.log("Entro en la condición B")

} else if (condicion === "C") {
    /*
       Código que se hace si se cumple la condición B
    */
       console.log("Entro en la condición C")

} else { 
    /*
       Código que se hace si no se cumple
       ninguna de las condiciones anteriores
    */
   console.log("No cumple con ninguna") //Entrarán las condiciones que no cumplen con las características que no hemos asignado
}

//Hacemos otra function con if

function dividir (a, b) {
    if (b === 0) {
        console.log("No se puede realizar la operacion");
    }
    else {
        console.log( a / b);
    }
}
dividir(10,2)

/* Switch */
//Se usa para evaluar expresiones

    let nuevaCondicion = "Hola";
    switch (nuevaCondicion) {

        case "Hola" :
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
        break

        case "Adios" :
            console.log("Nos vemos");
        break

        default:
            console.log("No entendí tu mensaje")
        break
}

    let elegir = sumar

    switch (elegir) {

        case "sumar":
            console.log("Vamos a sumar");
            break
    
        case "restar":
            console.log("Vamos a restar");
            break
    
        case "dividir":
            console.log("Vamos a dividir");
            break
    
        case "multiplicar":
            console.log("Vamos a multiplicar");
            break
    
        default:
            console.log("No entiendo");
    }
    

    if(elegir) {

        console.log("Vamos a sumar");
    
    }else if(elegir == "restar"){
    
        console.log("Vamos a restar");
    
    }else if(elegir == "dividir"){
    
        console.log("Vamos a dividir");
    
    }else if(elegir == "multiplicar"){
    
        console.log("Vamos a multiplicar");
    
    } else {
    
        console.log("No entiendo");
    
    }
    
    


