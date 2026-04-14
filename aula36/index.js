// const fruta = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

/*for (let i = 0; i < fruta.length; i++) {
    console.log(fruta[i]);
}

for (let i in fruta) {
    console.log(fruta[i]);
}*/

// console.log(pessoa.nome);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};