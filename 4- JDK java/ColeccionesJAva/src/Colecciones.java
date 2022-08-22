import java.util.ArrayList;
import java.util.List;
public class Colecciones {

    public static void main(String[] args) {
        //Estamos viendo Colecciones en Java
        //Las colecciones pueden almacenar colecciones de objetos
        //Las 3 colecciones más usadas son: Set, List y Map
        //Cada colección tiene implementaciones

        //List -- ArrayList
        //-Los valores se ordenan según el orden que los agreguemos
        //Permite tener valores duplicados
        //Es una colección de objetos de un mismo tipo


        List<String> meses = new ArrayList<String>(); //Lista de arreglos de texto, así la creo

        //En java se agregan de la siguiente manera los valores de un arreglo:

        meses.add("Enero"); //método add agrega un valor dentro del arreglo
        meses.add("Febrero"); //
        meses.add("Marzo");
        meses.add(1, "Abril");

        // meses.remove(3); //método para eliminar un valor del arreglo
        String mes = meses.remove(3); //Método que me trae el elemento eliminado


        System.out.println(meses);
        System.out.println(mes);
        System.out.println(meses.get(0)); //Me trae el valor que yo llamo, en este caso Enero, está en posición 0
        System.out.println(meses.size()); //Me trae la cantidad de elementos del arreglo

        for(String elemento : meses){ //Me imprime el arreglo
            System.out.println(elemento);
        }

        int num1 = 10; //Aquí tenemos un dato primitivo y no tenemos métodos
        Integer num2 = 10; //Integer(entero) es una clase wrapper o clase envolvente. La ventaja de
        // esta clase es que le podemos agregar métodos a diferencia de si declaramos un int

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);
        System.out.println(num2.getClass().getSimpleName()); //Este método nos explica que es un Integer

        //List<int> numeros = new ArrayList<int>(); Aquí, en esta lista me saldrá error porque estoy
        //agregando int y no integer en una lista

        //Si quiero hacerlo de manera correcta, se hace de la siguiente manera:
        //Hago un arreglo con números:

        List<Integer> numeros = new ArrayList<Integer>(); //Hacemos lista de números:

        numeros.add(2); //Con este método agregamos un número
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);



    }
}
