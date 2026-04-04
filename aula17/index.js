function saudacao(nome) {
    // console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}

/*
saudacao("João");
saudacao("Pedro");
const variavel = saudacao("Maria");
console.log(variavel);
*/

function soma(x, y) {
    // return x + y;
    const resultado = x + y;
    return resultado;
    console.log('Isso não será executado');
}

console.log(soma(2, 3));
// console.log(resultado);

const resultado = soma(5, 10);
console.log(resultado);
console.log(soma());

function soma2(x = 1, y = 1) {
    return x + y;
}

console.log(soma2(2));

const raiz = (n) => n ** 0.5;

console.log(raiz(25));

