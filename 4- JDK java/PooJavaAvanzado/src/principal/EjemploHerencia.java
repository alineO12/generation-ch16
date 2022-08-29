package principal;

import herencia.BasePadre;
import herencia.Hija;
import herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();

        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2357);

        System.out.println("Atributo de Clase Base Padre que hereda a hija y declaramos directamente en main"+h.getA());


    }
}
