// não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// não pode começar o nome de uma constante com um número
// não podem conter espaços ou traços, utilizamos camelCase
// são case-sensitive
// não podemos modificar o valor de uma constante

// const nomeCompleto;
// nomeCompleto = 'João da Silva';

// const nome = 'João';
// nome = 'Maria';

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 20;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);