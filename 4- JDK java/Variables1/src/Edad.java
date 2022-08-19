import java.util.Scanner;
public class Edad {
    public static void main(String[] args) {
        // Determinar si una persona es mayor de edad
        // Tener la edad
        // Condicional para saber si es menor de 18

        //Para obtener información en javascript: let nombre = prompt ("Escribe tu edad")
        // En Java se realiza de la siguiente manera:
        // con new se instacia un objeto a partir de una clase, en este caso scanner
        Scanner escaner = new Scanner(System.in);
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();

        System.out.println(edad);
        escaner.close(); //Se utiliza cuando ya no se necesita leer más datos

        //Ahora comenzaremos a realizar la condición:
        //Esto es un if else

        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        //Operador ternario, o Elvis

        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);



    }
}
