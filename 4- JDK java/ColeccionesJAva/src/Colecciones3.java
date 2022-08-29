import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        {
            comidas.add("Pozole");
            comidas.add("Tostadas");
            comidas.add("Ceviche");
            comidas.add(2, "Esquite");

            System.out.println(comidas);

            //Haremos un arreglo de números, pero en este caso
            // para evitar usar el método add, e ir agregando elemento por elemento
            //usaremos esta sintaxis para agregarlos en una sola lista
            //La consola debería imprimirme [1, 2, 3, 4, 5]
            //Es decir, me imprime la lista como se la envié con el método Arrays.asList
            //Si quisiera agregar una cadena de texto con este método, en vez de "Integer" debería
            //agregar <String>.

            List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 5));
            System.out.println(numeros);
            System.out.println("------");
            System.out.println("HashSet"); //

            Set<String> ciudades = new HashSet<>(); //HashSet me permite agregar colecciones de objetos
            //Hay que recordar que HashSet no me permite crear elementos duplicados
            //Mandará los elementos en la posición que encuentra, no por como lo hayamos agregado
            ciudades.add("GDL");
            ciudades.add("MTY");
            ciudades.add("CDMX");

            System.out.println(ciudades);

            //Ahora crearemos otra sintaxis de un HashSet

            Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));
            System.out.println(verdad);
            System.out.println("------");
            System.out.println("HashMap");

            //Ahora veremos la tercera colección llamada Map
            //HashMap me permite guardar pares de valores
            //Podemos mostrar el valor de manera individual
            // HashMap <Key, Value> --> HashMap <K, V>


            //Sintaxis de HashMap
            //Aquí agregamos un número (Integer) y un String (nombre del alumno)
            //Este método es más funcional para crear bases de datos primitivas
            //En este caso, podemos asociar un ID a un nombre de alumno

            Map<Integer, String> alumno = new HashMap<Integer, String>();
            alumno.put(1, "Pedro"); //Para HashMap no existe el método add para agregar. El método es put
            alumno.put(2, "Sofia");
            alumno.put(3, "Salma");
            alumno.put(4, "Miguel");

            System.out.println(alumno);
            System.out.println(alumno.size());//Proporciona el número de elementos que hay
            System.out.println(alumno.values()); //Este método proporciona los valores
            //Si HashMap es igual a HashMap (K, V)
            //y en este caso K equivale al número del alumno y V al nombre del alumno
            //Pues V (values) me mostrará el nombre de los alumnos: Pedro, Sofia, Salma, Miguel, no imprimirá su ID
            System.out.println(alumno.keySet()); //Aquí mostrará una lista de las Keys
            //En este caso, K equivale al ID del alumno
            //Por ende, me imprimirá en consola 1, 2, 3, 4


            //¿Cómo podemos mostrar un elemento en particular?
            //Aquí se mostrará la sintaxis

            System.out.println(alumno.get(2)); //Me imprime solo un valor, en este caso Sofía

            //Cómo crear un tipo de dato genérico con un Object
            //Object nos permite aplicar muchos métodos

            //Object llaves = alumno.keySet().toArray()[3]; //Aquí estoy pidiendo el valor de un array en específico,
            //estoy pidiendo la posición 3, recuerda que un array empieza a contar desde cero
            //así que me imprimirá en console Miguel
           // System.out.println(alumno.get(llaves));

            //Agregamos un ciclo
            //Lo imprimirá como una lista

            for(int i=0; i<alumno.size(); i++) { //En este caso me imprime una lista del arreglo de KEYS
                Object llaves = alumno.keySet().toArray()[i];
                System.out.println(alumno.get(llaves));
            }

            //Agregamos un forEach
            //Se imprimirá con un ID

            for (Integer llave : alumno.keySet()){ //En este caso me imprime una lista con su número
                System.out.println(llave + " - " + alumno.get(llave));
            }
    }
}
}
