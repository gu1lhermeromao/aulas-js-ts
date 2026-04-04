/* let a = 'A';
let b = 'B';
let c = 'C';

console.log(a, b, c);

const numeros = [1, 2, 3];

[a, b, c] = numeros;

console.log(a, b, c);*/


//               0  1  2  3  4  5  6  7  8
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [um, , tres, , cinco, ...resto] = numeros;

// const primeiroNumero = numeros[0];

console.log(um, tres, cinco, resto);*/

//                   0           1         2
//               0  1  2     0  1  2     0  1  2
const numeros = [[1 , 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] = numeros;

console.log(lista1, lista2, lista3);

/*console.log(numeros[1][2]);

const [,[,,seis]] = numeros;
console.log(seis);*/