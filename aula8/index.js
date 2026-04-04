const nome = "João Guilherme";
const sobrenome = "Romão";
const idade = 23;
const peso = 77;
const alturaEmMetros = 1.76;
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento = 2026 - idade;
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto, "tem", idade, "anos, pesa", peso, "kg, tem", alturaEmMetros, "metros de altura e seu IMC é de", imc);
console.log(nomeCompleto, "nasceu em", anoNascimento);

// Template Strings

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMetros} metros de altura e seu IMC é de ${imc}`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}`);