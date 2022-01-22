const Math ={};

function suma(numero1, numero2){
    console.log(numero1+numero2)
}

function resta(numero1, numero2){
    console.log(numero1-numero2)
}

function multiplicacion(numero1, numero2){
    console.log(numero1*numero2)
}

function division(numero1, numero2){
    if(numero2!=0){
        console.log(numero1+numero2)
    }else{
        console.log('No existe la divición para 0')
    }
}

Math.suma = suma;
Math.resta = resta;
Math.multiplicacion = multiplicacion;
Math.division = division;

module.exports = Math;