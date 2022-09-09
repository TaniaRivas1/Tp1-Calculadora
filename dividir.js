function dividir (a, b){
    if(a == 0 || b == 0 ){
        return "No se puede dividir por cero"
    }else if(a === undefined || b === undefined){
        return "Necesita dos números para la operación, por favor definalos"
    }
    return +a / +b
}

module.exports = dividir;