// variable que simula los datos pedidos
const saludo = "Hola mundo" 

const datos = [
    {
        nombre: "Aline",
        apellido: "Ortiz"
    },
    {
        nombre: "Aline",
        apellido: "Ortiz"
    },
    {
        nombre: "Aline",
        apellido: "Ortiz"
    }
]

//función para simular una petición

function obtenerDatos(){

    return new Promise((resolve, reject) => {

        setTimeout( () => {
            if(false){
                resolve(datos)
            } else {
                reject("Nunca te quiso")
            }
        }, 20000)
    })  
}

// Forma #1 de resolver problemas

obtenerDatos().then( (datos) => {
   
    console.log(datos);

}).catch( (error) => {

    console.log("Existe un error en la peticion 1");
    console.log(error);
    
})

// Forma #2 - Funciones asincronas - await async

async function funcionAsincrona() {

    try{ 

        const datos = await obtenerDatos()
        console.log(datos);

    }catch(error){
        console.log(error);
    }    
}

funcionAsincrona()