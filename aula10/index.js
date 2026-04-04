/**
 * Operadores Aritméticos
 * + Adição e Concatenação
 * - Subtração
 * * Multiplicação
 * / Divisão
 * % Resto da divisão
 * ** Exponenciação
 * Precedência dos operadores: () ** * / % + -
 * Incremento: ++
 * Decremento: --
 * incremento e decremento podem ser pré-fixados ou pós-fixados
 * Operadores de atribuição: +=, -=, *=, /=, **=
 * parseInt() -> converte string para inteiro
 * parseFloat() -> converte string para número de ponto flutuante
 * Number() -> converte string para número (inteiro ou ponto flutuante)
*/ 

const num1 = 10;
const num2 = 5;
let contador = 0;
contador++;
console.log(contador);
contador--;
console.log(contador);
++contador;
console.log(contador);
--contador;
console.log(contador);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

let contador1 = 0;
contador1 += 5;
console.log(contador1);
contador1 *= 5;
console.log(contador1);
contador1 -= 5;
console.log(contador1);
contador1 **= 5;
console.log(contador1);
contador1 /= 5;
console.log(contador1);

const num3 = 10;
const num4 = Number('20.20');
console.log(num3 + num4);