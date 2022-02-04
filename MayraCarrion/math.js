const math={};

function suma(valor1, valor2){
    console.log(valor1+valor2)
}
function resta(valor1, valor2){
    console.log(valor1-valor2)
}
function multiplicacion(valor1, valor2){
    console.log(valor1*valor2);
}
function division(valor1, valor2){
    if(valor2!=0){
        console.log(valor1/valor2);
    }else{
        console.log("No se puede dividir para cero");
    }
}
math.add=suma;
math.resta=resta;
math.multiplicacion=multiplicacion;
math.division=division;

module.exports = math;