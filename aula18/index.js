const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(typeof array);
console.log(array instanceof Array);
array.push(10);
array[0] = 100;
console.log(array);
const pessoa01 = {
    nome: 'João',
    sobrenome: 'Guilherme',
    idade: 23,
    fala () {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
    },
    incremantaIdade () {
        this.idade++;
    }
};
console.log(pessoa01);
console.log(typeof pessoa01);
console.log(pessoa01 instanceof Object);
console.log(pessoa01.nome);
pessoa01.fala();
pessoa01.incremantaIdade();
pessoa01.fala();

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('João', 'Guilherme', 23);
const pessoa2 = criaPessoa('Maria', 'Silva', 25);
const pessoa3 = criaPessoa('Pedro', 'Santos', 30);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);