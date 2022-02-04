function mayorMenor (numero1, numero2) {

    if (numero1 > numero2) {
        console.log("El numero " + numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
        console.log("El numero " + numero2 + " es mayor que " + numero1);
    } else {
        console.log("Los numeros son iguales");
    }

}

exports.add = mayorMenor;
