/*console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');*/

/*for (let i = 0; i <= 5; i++) {
    console.log('Linha ' + i);
}

for (let i = 100; i <= 500; i+=20) {
    console.log(`Linha ${i}`);
}*/

for (let i = 0; i <=10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(`${i} é ${par}`);
}

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'pera'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i}: ${frutas[i]}`);
}

console.log(frutas.length);