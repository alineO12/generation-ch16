import java.util.Scanner;

public class EjercicioEnClase {
    public static void main(String[] args) {
        String valor = "";
        for (int i = 0; i <= 5; i++) {
            valor += "*";
            System.out.println(valor);
        }

        for(int espacios = 0, asteriscos = 5; asteriscos>0; espacios++, asteriscos -= 1){

            for(int i=0; i < espacios; i++){
                System.out.print("");
            }

            for(int j=asteriscos; j > 0; j--){
                System.out.print("*");
            }
            System.out.println("");
        }

        //  Pedirle al usuario la cantidad de estrellitas y la direccion

        Scanner input = new Scanner(System.in);
        System.out.println("Número de estrellas");
        int estrellas = input.nextInt();
        System.out.println("Direccion 1 o 2");
        int direccion = input.nextInt();


        switch (direccion){
            case 1:
                String valor3 = "";
                for (int i=0; i<estrellas; i++){
                    valor3 += "*";
                    System.out.println(valor3);

                }

                break;
            case 2:
                String valor4 = "";
                for (int j=estrellas; j>0; j--){
                    for (int k=0; k<j; k++){
                        valor4 += "*";

                    }
                    System.out.println(valor4);
                    valor4 = "";


                }
                break;
        }


        //leer información
        Scanner sc = new Scanner(System.in);
        System.out.println("Indique la cantidad de estrellas");
        int numEstrellas = sc.nextInt();
        System.out.println("Indique la direccion (Ascendente,Descendente)");
        String direccion = sc.next();

        switch (direccion){
            case "Ascendente":
                for(int i=1; i<=numEstrellas ; i++){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            case "Descendente":
                for(int i=numEstrellas; i>=1 ; i--){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            default:
                System.out.println("Opcion no valida");
        }









    }
}
