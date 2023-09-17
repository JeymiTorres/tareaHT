/*Fibonacci: secuencia de números donde cada número es la suma de los dos anteriores  */

public class tarea {
    public class fibonacci {
        public static void main(String[] args) {
            int n = 10;
            int a = 0;
            int b = 1;

            for (int i = 0; i < n; i++) {
                int c = a + b;
                System.out.println(c);
                a = b;
                b = c;
            }
        }
    }
}

/* Promedio de numeros */

public class Promedio {
    public static void main(String[] args) {
        int[] numeros = {1,2,3,4,5};
        int suma = 0;
        for(int numero: numeros){
        }
        float promedio = suma / numeros.length;
        System.out.println("El promedio es: " promedio);
    
    }
}