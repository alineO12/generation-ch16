package EjemplosResumen;

public class EjemploAnimal {
    public static void main(String[] args) {
        Animal miAnimal = new Animal("Falco");

        miAnimal.setEdad(3);

        System.out.println("El nombre es" + miAnimal.getNombre());
        System.out.println("y tiene" + miAnimal.getEdad() + "años");

    }
}
