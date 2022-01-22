function suma(valor1, valor2){
    console.log(valor1+valor2)
}
function resta(valor1, valor2){
    console.log(valor1-valor2)
}
function multiplicacion(valor1, valor2){
    console.log(valor1*valor2)
}
function division(valor1, valor2){
    if(valor2!=0){
        console.log(valor1/valor2)
    }else{
        console.log("No se puede dividir para cero")
    }
    
}
suma(2,4);
resta(2,4);
multiplicacion(2,4);
division(2,4);
division(2,0);