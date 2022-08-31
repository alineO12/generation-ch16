package j_interface;

public interface Test {
       //Es una clase interface, así que solo se declara método que no se implementará
       //Vamos a declarar métodos
       //¿Cómo se le dice a un método que está siendo heredado en una clase abstracta? =@override
       //¿Cómo le decimos a un método que está siendo implementado en una interfaz? =implements

        int CONV=8;
        void metodo1(int x);
        String metodo2(String s);
    }

        //Concepto de clase interna: declarar otra clase dentro de las clases
        //Ahora vamos a declarar clase prueba que implementará de Test
        //Esta implementación se puede hacer en otro archivo, pero lo haremos aquí con
        //fines prácticos, lee aquí abajo: class Prueba implements Test, Test1 {}

    class Prueba implements Test,Test1{
        @Override
        public void metodo1(int x) {
            System.out.println("Hola metodo1 parametro x --> "+x);
        }
        @Override
        public String metodo2(String s) {
            return "este parametro es s -->" +s;
        }

        //Este método es propio de la clase Prueba, y no lo puedo llamar en ejemploTest con ts.metodoPropio,
        // por ello en EjemploTest haremos un p.metodoPropio
        public void metodoPropio(){
            System.out.println(" soy el metodo propio");
        }


        @Override
        public void metodo01() {
            System.out.println("Hola soy el metodo de Test1 metodo01");
        }

        @Override
        public String metodo02() {
            return "hola metodo 02";
        }
    }

