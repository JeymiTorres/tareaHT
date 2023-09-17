//Tarea//
//Calcular el area de un triangulo//
var base, altura;
base = parseInt(prompt("Ingresa la base"));
altura = parseInt(prompt("ingresa la altura"));

var area = (base * altura) / 2
console.log("el area del triangulo es :" + (base * altura) / 2);

//Convertir grados Celsius a Fahrenheit//

var celsius, fare;
celsius = parseFloat(prompt("Ingresa grados celsius"));
fare = (9 / 5 * celsius) + 32;
console.log(celsius + " grados celsius equivalen a " + fare + " grados Fahrenheit");


//Encontrar el máximo de 2 números// 

a = parseInt(prompt("Introduzca un numero"));
b = parseInt(prompt("Introduzca un numero"));
var mayor = Math.max(a, b);
console.log("El numero mayor es:" + mayor);

//Calcular el Factorial de un numero//

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
var resultado = factorialize(5);
console.log("El factorial es: " + resultado);


//Calcular la suma de los primeros N números naturales.//
function sumaNumerosNaturales(n) {
    return n * (n + 1) / 2;
}

console.log(sumaNumerosNaturales(10)); 