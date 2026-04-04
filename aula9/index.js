/*
ECMAscript 6 (ES6) introduziu as palavras-chave `let` e `const` para declarar variáveis, que possuem escopo de bloco e não permitem redeclaração. No entanto, o código fornecido utiliza a palavra-chave `var`, que tem escopo de função e permite redeclaração.
nome = "João"; não faça isso
var nome = "João";
var nome = "Maria";
var nome = "Pedro";

let nome = "João";
nome = "Maria";
nome = "Pedro";
console.log(nome);
*/

const nome = 'João'; // string 
const nome1 = "Maria"; // string 
const nome2 = `Pedro`; // string
const num1 = 10; // number 
const num2 = 3.14; // number 
let nomeAluno; // undefined 
const sobrenomeAluno = null; // nulo
const aprovado = true; // boolean = true ou false (lógico)

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

let a = 2
let b = a;

console.log(a, b);

a = 3;
console.log(a, b);