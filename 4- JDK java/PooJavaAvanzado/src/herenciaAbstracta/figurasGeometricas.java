package herenciaAbstracta;

public abstract class figurasGeometricas {

    //vamos a definir una clase abstracta
    //Car:
    //Es igual que cualquier otra clase, pero es abstracta
    //Se llama abstracta porque tiene un mètodo abstracto
    //El mètodo abstracto es un mètodo que tiene una declaraciòn, una identidad
    //Es decir, solo define el nombre


    //Estamos en el paso 2
    private String nombre;

    //Haremos un constructor
    public figurasGeometricas(String nombre) {
        this.nombre = nombre;
    }

    //Termina paso 2
    public abstract float area();


    //Es un métodos que viene de la clase java lang
    //Esto lo sabemos por el Override, sobreeescritura
    //LE dice a la máquina que extiende la clase más grande

    //Yo quiero que me diga de qué objeto está calculando el área
    //VAmos a paso 2 a definir otra clase, (lo indico con el 2 arriba, ve Aline)
    @Override
    public String toString() { //ToString es un método
        return nombre + "area ->" + area();
    }
}
