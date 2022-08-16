const suma = require('../js/suma');

//Hacer pruebas:
//Pedir un valor esperado
//Comparar el resultado con el valor esperado

test('sumar 1 + 2 debe ser 3', () => {
    expect(suma(1,2)).toBe( 3 );
});


