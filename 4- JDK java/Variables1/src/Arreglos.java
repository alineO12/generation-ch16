public class Arreglos {
    public static void main(String[] args) {

        // Arreglos en Java
        //No se pueden mezclar tipos de datos

        int[] numerosAleatorios = {1,2,3,4,5,6}; //Aquí no podría agregar un String, solo guarda por tipo de datos
        String[] valores = {"Hola", "Adios", "Hasta pronto"}; //Hacer arreglo de Strings

        //byte otrosNumeros[] = {1,2,3}; //Esta es otra manera de hacer un arreglo, poner corchetes después del nombre de la variable
        char[] caracteres = new char[4]; //El 4(tamaño) significa que son 4 elementos en el arreglo, en java los arreglos están definidos
        caracteres[0] = 'h'; //Para definir los caracteres debemos llamar la variable
        caracteres[1] = 'o'; //Asignar posición, ej. posición 1 irá la letra o y así sucesivamente
        caracteres[2] = 'l'; //Los caracteres siempre van en comillas simple
        caracteres[3] = 'a';

        valores[2] = "Asignamos nuevo valor"; //Aquí indicamos que en la variable valores, asignaremos nuevo valor en posición 2
        // por lo tanto si imprimimos en consola, me aparecerá: "Asignamos nuevo valor"
        System.out.println(numerosAleatorios.length); //Tenemos que indicar la posición que queremos imprimir
        System.out.println(valores[2]);//Si no mandamos posición, mandará en consola información en donde están almacenados
        System.out.println(caracteres);

        //for each
        //Recorre la cantidad de elementos que tiene nuestro arreglo

        for(String elemento : valores){
            System.out.println(elemento);
        }

        for(int numero : numerosAleatorios){
            System.out.println(numero);
        }

    }
}
