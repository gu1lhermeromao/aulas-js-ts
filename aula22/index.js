/*
* Operadores lógicos
* && AND
* || OR
* ! NOT
*/

const expressaoAnd = true && true;
const expressaoOr = false || true;
const expressaoNot = !true;

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);

const usuario = 'João';
const senha = '123456';

const login = usuario === 'João' && senha === '123456';
console.log(login);