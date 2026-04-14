const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log(`Pulando o número ${numero}`);
        continue;
    }

    if (numero === 7) {
        console.log(`Parando o loop no número ${numero}`);
        break;
    }
    console.log(numero);
}
console.log('------');
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2 || numero === 5) {
        console.log(`Pulando o número ${numero}`);
        i++;
        continue;
    }

    if (numero === 7) {
        console.log(`Parando o loop no número ${numero}`);
        i++;
        break;
    }
    console.log(numeros[i]);
    i++;
}