let x = 10;
/* console.log(x.length); */

/* let obj_persona = {
    nombre: 'Juan',
    apellido: 'Ortiz',
    correo: 'juan@gmail.com',
    edad: 35
}


console.log(obj_persona);

let personas = new Object ()
personas.nombre = "David";
personas.apellido = "Molina"
personas.edad = 30;
personas.correo = "ii@gmail.com"

console.log(personas.nombre);
console.log(personas.apellido);
console.log(personas.edad);
console.log(personas.correo); */

let persona = {
    nombre: "Michael",
    apellido: "Fernández",
    edad: 33,
    correo: "al@gmail.com",
    /* nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    } */
//con get accedemos a atributos
    idioma: 'es',
    get leng() {
        return this.idioma.toUpperCase();
    },
    set lang (lang) {
        return this.idioma = lang.toLowerCase();
    }
}
console.log(persona.leng);
persona.lang = 'ES';
console.log(persona.leng);
console.log(persona.idioma);


persona.tel = '5523234323';

/* console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto()); */

// for in (recorrer atributos)

for (varPropiedad in persona) {
   /*  console.log(persona[varPropiedad]); */
}

let personasString = JSON.stringify(persona);
/* console.log(personasString); */
