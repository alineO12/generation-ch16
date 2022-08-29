package herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre() {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public void visualizarA(){
        System.out.println("Object h dice -> Soy un método de la clase BasePadre");

    }


    public void visualizarABC(){
        System.out.println("Object ho dice -> Soy el método visualizarABC");

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
