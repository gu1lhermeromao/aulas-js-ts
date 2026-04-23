// argumentos que sustenta todos os argumentos enviados
/*function funcao(a, b, c){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
    console.log(a, b, c);
};
funcao(1, 2, 3, 4, 5);*/

/*function funcao(a, b, c, d, e){
    console.log(a, b, c, d, e);
};
funcao(1, 2, 3, 4);*/

/*function funcao(a, b = 2, c = 4){
    // b = b || 0;
    console.log(a + b + c);
};
funcao(2, undefined, 20);*/

/*function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
};
let obj = { nome: 'João', sobrenome: 'Romão', idade: 23 };
funcao(obj);
// funcao({ nome: 'João', sobrenome: 'Romão', idade: 23 });*/

/*function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao(['João', 'Maria', 'José']);*/

/*function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', -100, 20, 30, 40, 50);*/

const conta = function(...args){
    //console.log(arguments);
    console.log(args);
};
conta('+', -100, 20, 30, 40, 50);