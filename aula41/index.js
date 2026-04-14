// escreva uma função que recebe dois números e retorna o maior deles

const n1 = 10;
const n2 = 8;

function maiorNumero(a, b) {
    return a > b ? a : b;
}

const max = (x, y) => x > y ? x : y;

console.log(maiorNumero(n1, n2));
console.log(max(n1, n2));