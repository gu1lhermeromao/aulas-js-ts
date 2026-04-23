/*
* return
* Retorna um valor e termina a função
*/

/*document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});/*

function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));

/*function soma2(a, b) {
    console.log(a + b);
}
soma2(2, 3);*/

/*function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    };
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo);
console.log(olaMundo('Mundo!'));
const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);*/

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));