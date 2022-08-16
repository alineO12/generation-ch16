//Funciones como objetos

function miFuncion (a = 6, b = 7) { //Parámetros
    let res = 0; //Propiedad 
    res = (a * b); //Acción o proceso
    return res;
}

console.log (typeof miFuncion); // .toString
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto) 
