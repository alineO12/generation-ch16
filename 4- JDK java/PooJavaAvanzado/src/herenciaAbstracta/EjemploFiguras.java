package herenciaAbstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0,0);
        t.setBase(5);
        t.setAltura(2);
        System.out.println("t es el objeto del triangulo = " + t.area());

        Circulo c = new Circulo();
        c.setRadio(15.5f);
        System.out.println("c.area() Calcula el area del circulo = " + c.area());

    }

}
