import java.util.*; //importar todas las clases de Java

public class Bucles {
    public static void main(String[] args) {
        // System.out.println("Bucles")

        //ciclo for

        for (int i = 5; i <= 10; i++) {
            System.out.println(i);
        }
        //while
        //bucle no controlado
        //la condición se debe de modificar dentro del while
        //Ejecuta un set de instrucciones siempre y cuando una
        //condición en específico se cumple


        String condicion = "";
        Scanner sc = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        // La condición se modifica dentro del while
        while (!Objects.equals(condicion, "Hola")) {
            System.out.println("Saludame");
            condicion = sc.next();
        }

        //Do...While
        //es igual al while
        //Primero evalua y después ejecuta
    }

}
