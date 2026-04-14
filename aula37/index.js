//            0123... 
// const nome = 'Luiz Otávio';
const pessoa = {
    nome: 'Luiz Otávio',
    sobrenome: 'Miranda',
    idade: 30
};

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};

for (let valor of Object.values(pessoa)) {
    console.log(valor);
};
/*const nome = ['Luiz', 'Otávio', 'Miranda'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
};
console.log('------------------');
for (let i in nome) {
    console.log(nome[i]);
};
console.log('------------------');
for (let valor of nome) {
    console.log(valor);
};
console.log('------------------');
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
console.log('------------------');*/