import java.util.*;

public class DiccionarioEjercicioEnClase {
    public static void main(String[] args) {
        //  Crear una clase llamada Diccionario
        //         *  Crear un programa en Java que realice lo siguiente:
        //         *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
        //         *  Utilizar un objeto HashMap para almacenar los pares de palabras.
        //         *  Escoger al azar 5 palabras del mini diccionario.
        //         *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
        //         *
        //         *
        //         *
        //         * Extra:
        //         *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
        //         *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.




        //Iniciaremos a realizar el ejecicio

        Map<String, String> palabra = new HashMap<String, String>();

        palabra.put("Día", "Day"); //1
        palabra.put("Semana", "Weekend"); //2
        palabra.put("Mes", "Month"); //3
        palabra.put("Año", "Year"); //4
        palabra.put("Fecha", "Date"); //5
        palabra.put("Primavera", "Summer"); //6
        palabra.put("Verano", "Spring"); //7
        palabra.put("Otoño", "Autum"); //8
        palabra.put("Invierno", "Winter"); //9
        palabra.put("Niño", "Boy"); //10
        palabra.put("Niña", "Girl"); //11
        palabra.put("Mundo", "World"); //12
        palabra.put("Hola", "Hello"); //13
        palabra.put("Adiós", "Bye"); //14
        palabra.put("Nombre", "Name"); //15
        palabra.put("Bien", "Good"); //16
        palabra.put("Por favor", "Please"); //17
        palabra.put("De nada", "Thank you"); //18
        palabra.put("Mal", "Bad"); //19
        palabra.put("Agua", "Water"); //20

        System.out.println(palabra);
        System.out.println(palabra.size());

        for (int i=0; i<palabra.size(); i++){
            Object llavesArray = palabra.keySet().toArray()[i];
            Object valor = palabra.get(llavesArray);
            if (buscar.equals(llavesArray)){
                System.out.println(valor);
            }

        }












    }
}
