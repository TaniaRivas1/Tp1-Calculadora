function multiplicar (a, b){
    if (a == 0 || b == 0) {
         return "Toda multiplicación por cero da como resultado 0"
    }else if(a === undefined || b === undefined){
        return "Necesita dos números para esta operación, por favor definalos"
    }
    return +a * +b

}

module.exports = multiplicar;