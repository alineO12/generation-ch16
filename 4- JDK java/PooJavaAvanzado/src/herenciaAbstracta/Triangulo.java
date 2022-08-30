package herenciaAbstracta;


public class Triangulo extends figurasGeometricas {
    private float base;
    private float altura;

    public Triangulo(float base, float altura) {
        super("Triangulo"); //aquí agregamos la clase super que hereda del padre, va a la clase padre y deposita lo
        //que tiene papá para recuperarlo en hijo, me permite acceder a la clase padre
        this.base = base;
        this.altura = altura;
    }

    @Override
    public float area(){
        return (getBase()*getAltura())/2;
    }


    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }
}

