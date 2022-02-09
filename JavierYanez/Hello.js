/*
var  numero1 = 2;
let numero2 = "3";
const numero3 = 4;

console.log(numero1, numero2, numero3);
*/
/*
const suma = num1 /  num2;
console.log(suma);

function sumar (num1, num2){
    return num1 + num2;
}

const res = sumar(2 ,10);
console.log(res);

const persona = {
    nombre:"Jaier",
    apellido:"Yanez"
}

console.log(persona);
*/
const num1 = 5;
const num2 = 44;

function nm(nn1,nn2){
    return nn1  > nn2 ? nn1 : nn2
}

//console.log("EL numero mayor es: "+ num1  > num2 ? num1 : num2) 
//num1  > num2 ? console.log("EL numero mayor es: "+num1) : console.log("EL numero mayor es: "+num2);

function numeros(n1, n2){
    if(n1 > n2){
        return n1
    }else{
        return n2
    }
}



console.log("EL numero mayor es: "+nm(2, 5));

const os = require('os')
console.log(os.type())
