const process = require("process");

const sumar = require("./sumar");

const restar = require("./restar")

const multiplicar = require("./multiplicar")

const dividir = require("./dividir")

const operacion = process.argv[2];
const numero1 = process.argv[3];
const numero2 = process.argv[4];

if (operacion === "sumar") {
    console.log(sumar(numero1, numero2));
}else if (operacion === "restar") {
    console.log(restar(numero1, numero2));
} else if (operacion === "multiplicar"){
    console.log(multiplicar(numero1, numero2));
}else if (operacion === "dividir"){
    console.log(dividir(numero1, numero2));
} else{
    console.log('Operacion inexistente, ingrese una de estas: sumar/ restar/ multiplicar/ dividir');
}