package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona();
        p.setNombre("Diego");
        p.setEdad(32);
        p.setNss(145678);
        System.out.println("el valor de la variable instancia p.nombre ->" + p.getNombre());
        System.out.println("el valor de la variable instancia p.nombre ->" + p.getEdad());
        System.out.println("el valor de la variable instancia p.nombre ->" + p.getNss());

    }
}
