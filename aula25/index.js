const numero = 10;

if (numero < 11) {
    console.log('O número é maior que dez');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número é maior igual a zero e menor igual a cinco');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número é maior que cinco e menor igual a dez');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número é maior que nove e menor igual a onze');
} else if (1 === 1) {
    console.log('O número um é igual a um');
} else {
    console.log('O número não está entre zero e onze');
}

console.log('Fim do programa');