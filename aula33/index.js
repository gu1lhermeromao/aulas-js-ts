const pessoa = {
    nome: 'João Guilherme',
    sobrenome: 'Romão',
    idade: 30,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 0,
    }
};

/*const {nome = 'Nome não informado', sobrenome: sb, idade, apelido = 'Apelido não informado'} = pessoa;

console.log(pessoa);

console.log(nome, sb, idade, apelido);

const {endereco: {rua, numero}, endereco} = pessoa;

console.log(rua, numero, endereco);*/

const { nome, ...resto } = pessoa;

console.log(nome, resto);