package MetPrincipal;

import MenuP.MenuOp;
import MiEjemploJava.Persona;

import java.util.Scanner;

public class EjecutaT {
    public static void main(String[] args) {

        //Desde aquí, main, podemos ejecutar cualquier archivo de package
        //Debemos crear una estructura que me permita observar un menú de opciones

        //Para ello usaremos una estructura de control
        //Así invocaremos a cada una de las clases que hemos construído
        //Cree un packageMenuP
        //AHí hice un sout con lo que quiero
        //Ahora en esta haré una encapsulación= almacenar en un lugar específico

        //Declarar la referencia con MenuP

        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        MenuOp.menu();
        System.out.print("Elija una opción");

        int op;

        do{
            op = sc.nextInt();


        switch (op) {
            case 1:
                Persona p = new Persona();
                p.setNombre("Diego");
                p.setEdad(32);
                p.setNss(145678);
                System.out.println("el valor de la variable instancia p.nombre ->" + p.getNombre());
                System.out.println("el valor de la variable instancia p.nombre ->" + p.getEdad());
                System.out.println("el valor de la variable instancia p.nombre ->" + p.getNss());
                break;
                default:
                    System.out.println("Opción no valida");
                break;

        }

        }while (op < 1);



    }
}
