public class OperadoresLogicos {
    public static void main(String[] args) {

        int i = 3;
        byte j = 3;
        float k = 127e-7f; // 127e-7f, la f me indica que es un float
        double l = 2.1415e3d; // la d me indica que es double
        boolean m = false;
        boolean x = true;
        
        boolean b1 = k < l && i == j; //evalua si k < l """"y""" i == j
        System.out.println("b1 = " + b1);
        
        boolean b2 = k < l && i == j && x == false; //cualquier valor false dará salida false
        System.out.println("b2 = " + b2);

    }
}
