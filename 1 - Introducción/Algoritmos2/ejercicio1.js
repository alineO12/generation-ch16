//alert("Hola Mundo");

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

personas.splice(1,1);
console.log(personas);

personas.splice(2,1);
console.log(personas);

personas.splice(1,1);
personas.unshift("Luis");
console.log(personas);

personas.push("Aline");
console.log(personas);

console.log(personas.indexOf("Maria"));
console.log(personas.indexOf("Aline"));
