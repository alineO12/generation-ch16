import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {

        //SET
        //HashSet
        //El set no permite valores duplicados
        //Esto me servirá para guardar algo de manera rápida y que no venga duplicado
        //Por ejemplo, emplear este método en una base de datos de productos
        //Permite facilitar la búsqueda


        Set<String> miSet = new HashSet<>(); //Simula tabla de base de datos y hace búsquedas óptimas
        // Qué hace, HashSet,
        // LLama método equals (busca) y nos busca a través de un identificador
        //No guardan los valores en el que se van agregando
        //Se imprime de acuerdo al índice que esté disponible
        //En consola me imprimió = Felipe, Luis, Pedro, Juan

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");

        miSet.remove("Felipe"); //En este caso, HashSet, no podemos utilizar el número del índice
        //para acceder al valor, así que pondremos el nombre del valor que deseamos eliminar,
        //Por lo que aquí para eliminar Felipe, solo escribimos "Felipe"

        System.out.println(miSet);
        System.out.println(miSet.size()); //Cuántos datos tiene el arreglo
        System.out.println(miSet.contains("Juan"));//qué hace contains:
        // Este objeto que está dentro de los paréntesis, existe en el arreglo?
        //Es decir, me pregunta si "Juan" existe dentro del arreglo
        //La consola me agrega un "true"

        for(String nombre : miSet){
            System.out.println(nombre);
        }


    }
}
