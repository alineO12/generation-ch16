//Casa de Tauro

const carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log("Andrea adelanta a María");

carreritas.splice(4, 1);
let agregar = carreritas.unshift("Andrea");
carreritas.splice(2, 1);
agregar = carreritas.unshift("Roberto");
carreritas.splice(2, 1);
agregar = carreritas.unshift("Lucia");
console.log(carreritas);

carreritas.splice(4,1);
console.log("Jesús fue eliminado");
console.log(carreritas);

carreritas.splice(0, 1);
agregar = carreritas.unshift("Cristóbal");
agregar = carreritas.unshift("Fernanda");
agregar = carreritas.unshift("Armando");
agregar = carreritas.unshift("Lucía");
console.log(carreritas)

agregar = carreritas.unshift("Federico");
console.log(carreritas);





