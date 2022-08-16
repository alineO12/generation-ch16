const palindromo = require('../js/palindromo.js');

describe('Pruebas de la función palindromo', () => {

    test('debe regresar "Es un palindromo" si ingresamos ojo', () => {
        let mensaje = 'Es un palindromo';
        let palabra = 'ojo';

        expect(palindromo(palabra) ) .toBe(mensaje);

    })

    test('no debe regresar "Es un palindromo" al ingresar generation', () => {
        let mensaje = 'Es un palindromo'
        let palabra = 'generation'

        expect( palindromo(palabra) ).not.toBe(mensaje);
    })

    
    //evaluar otros valores

    
    test('al ingresar un número debe regrear el mensaje', () => {
        let mensaje = 'No es una palabra';
        let valor = 3;

        expect(palindromo(valor)).toBe(mensaje);

    })
})