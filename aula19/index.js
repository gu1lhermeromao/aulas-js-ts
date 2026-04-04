/*
* Primitivos* - String, Number, Boolean, Undefined, Null (bigint, symbol) - Imutáveis - Valores copiados
* Referência* - Array, Object, Function - Mutável - Passados por referência
*/
let nome = 'João';
nome = 'Maria';
console.log(nome);

/*
let a = 'A';
let b = a;
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);
*/

let a = [1, 2, 3];
// let b = a;
let b = [...a]; // Spread operator - copia os valores do array para outro array
let c = b;
console.log(a, b);
a.push(4);
console.log(a, b);
b.pop();
console.log(a, b);
a.push('Luiz');
console.log(c);

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva'
};

const outraPessoa = { ...pessoa }; // Cria uma cópia do objeto
console.log(pessoa, outraPessoa);
pessoa.nome = 'Maria';
console.log(pessoa, outraPessoa);