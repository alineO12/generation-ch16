package herenciaAbstracta;

public class Circulo extends figurasGeometricas{

    private float radio;
    @Override
    public float area() {
        return (float) (Math.PI * Math.pow(radio, 2));
    }

    public Circulo() {
    }

    public Circulo(float radio) {
        this.radio = radio;
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
