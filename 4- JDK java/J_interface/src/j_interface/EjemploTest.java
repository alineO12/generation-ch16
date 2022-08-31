package j_interface;

public class EjemploTest {
    //Esta clase tiene el método main, la que ejecuta
    //Vamos a hacer la instancia
    public static void main(String[] args) {
        //Primero mandaré un sout
        //Declaración
        //Llamar a un atributo, primera forma desde el nombre de la clase interfaz, que es Test
        System.out.println("Test.CONV = " + Test.CONV);
        //Segunda forma ,con la clase que implementa la interfaz, en este caso, es "Prueba"
        System.out.println("Prueba.CONV = " + Prueba.CONV);
        //Ahora haremos instancia
        Prueba p = new Prueba();
        System.out.println("p.CONV = " + p.CONV);

        //A continuación tenemos una instancia de tipo referencia
        //Este objeto está siendo declarado de una interfaz, que solo tiene declaraciones
        //Objeto de tipo interfaz, pero se crea de la clase que implementa esa interfaz, o sea Prueba
        //El objeto se crea de una clase interfaz y quien lo crea es la parte que implementa esa interfaz

        Test ts = new Prueba();


        ts.metodo1(3);
        //ts.metodo2("hola");
        System.out.println("ts.metodo2( \"hola\") = " + ts.metodo2( "hola"));

        p.metodoPropio();

        Test1 s1 = new Prueba();
        s1.metodo01();
        System.out.println("s1.metodo02() = " + s1.metodo02());

    }
}
