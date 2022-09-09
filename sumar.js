function sumar (a, b){
    if(a === undefined || b === undefined){
        return "Necesita dos números para la operación, por favor definalos"
    }
    return +a + +b
}

module.exports = sumar;