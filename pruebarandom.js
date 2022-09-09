const sumar = require("./sumar");
const restar = require("./restar")
const multiplicar = require("./multiplicar")
const dividir = require("./dividir")

const aleatorio1 =  (Math.random() * 100).toFixed(0);
const aleatorio2 =  (Math.random() * 10).toFixed(0);

console.log('       SUMA       ');
console.log(aleatorio1, aleatorio2, sumar(aleatorio1, aleatorio2));

console.log('       RESTA       ');
console.log(restar(aleatorio1, aleatorio2));

console.log('    MULTIPLICACION    ');
console.log(multiplicar(aleatorio1, aleatorio2));

console.log('      DIVISION      ');
console.log(dividir(aleatorio1, aleatorio2));