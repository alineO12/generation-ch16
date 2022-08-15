//poo

class Persona{ 
    
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get nombre() {
        return this.nombre = nombre;
    }
    set nombre(nombre) {
        this.nombre = nombre;
    }
}

let persona1 = new Persona('José', 'Perez', 33);
console.log(persona1);

let persona2 = new Persona ('Mario', 'Ortega', 32);
console.log(persona2);

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }
}

/* let persona1 = new Persona('David','Castellanos');

console.log(persona1);

persona1.nombre = 'David Guzman'

console.log(persona1.nombre);

let persona2 = new Persona ('Arturo', 'Guzman');
console.log(persona2); */


