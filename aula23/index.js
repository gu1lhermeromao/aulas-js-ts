/*
* FALSY
* false
* 0
* '' "" ``
* null / undefined
* NaN
* Todos os outros são TRUTHY
*/

console.log('João Guilherme' && 0 && 'Maria' && '');
console.log('João Guilherme' && 0 || 'Maria' && '');
console.log('João Guilherme' || 0 || 'Maria' || '');

function falaOi() {
    return 'Oi';
}

const vaiExecutar = 'João'

console.log(vaiExecutar && falaOi());

