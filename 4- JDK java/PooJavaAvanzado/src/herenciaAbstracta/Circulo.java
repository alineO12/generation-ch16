package herenciaAbstracta;

public class Circulo extends figurasGeometricas{

    private float radio;
    @Override
    public float area() {
        return (float) (Math.PI * Math.pow(radio, 2));
    }


    //Aquí agregamos función super y le paso el nombre de la clase que se trata, en este caso, círculo
    public Circulo(float radio) {
        super("Circulo");
        this.radio = radio;
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
