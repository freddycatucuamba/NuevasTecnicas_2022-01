
/*var numero1=2;
let numero2=3;
const numero3=4;*/
// comentraio 1 linea
//console.log(numero1, numero2, numero3);

//const numero1=5;
//const numero2=4;
//const suma=numero1+numero2;

//console.log(suma);

function sumar(numero1, numero2){
    return numero1 + numero2;
}

const persona={
    nombre: "Mayra",
    apellido: "Carrion",
    edad: 25
}

function numeroMayor(n1, n2){
    if(n1 > n2)	{
      console.log("El numero mayor es: " + n1 + " ( Numero 1 )");
	}
	else if (n2 > n1){
	    console.log("El Numero mayor es : " + n2 + " ( Numero 2 )");
	}else{
        console.log("Los numeros son iguales")
    }

}
    numeroMayor(9,12);