//Exercise #1


//Parte 1
//Hay tres personas esperando el banco. Sus nombres, en orden, 
//son Sofía, David y Juan. 
//Cree una matriz que tenga estos tres nombres en orden.

let personas = ['Sofia', 'David', 'Juan'];
console.log(personas);

//Parte 2
//Se agregan dos personas más al final de la fila: Sarah y Augustine. 
//La primera persona en la fila es llamada al cajero. 
//¿Cómo es la cola?

personas.splice(3, 0,'Sara','Agustín');
console.log(personas);

personas.splice(0,1);
console.log(personas);

//Parte 3
//Resulta que David estaba reservando un lugar para su
//amiga Renata. Ella aparece y va detrás de él en la fila. 
//Aparece una persona más (Elena) y va hasta el final de la fila. 
//¿Cómo es la cola?

personas.splice(1, 0,'Renata');
console.log(personas);

personas.push('Elena');
console.log(personas)


