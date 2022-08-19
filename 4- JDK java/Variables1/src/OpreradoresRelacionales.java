public class OpreradoresRelacionales {
    public static void main(String[] args) {
        
        int i = 3;
        byte j = 7;
        
        boolean b1 = i == j; //operador
        System.out.println("b1 = " + b1);
        
        boolean b2 = !b1; // operador lógico not
        System.out.println("b2 = " + b2);
        
        boolean b3 = i > j; //false 3 no es mayor que 7
        System.out.println("b3 = " + b3);

        boolean b4 = i < j; //true 3 es menor a 7
        System.out.println("b4 = " + b4);
    }
}

