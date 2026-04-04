/* const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
const data = new Date(0 + tresHoras + umDia); // 0 representa a data de 1 de janeiro de 1970, às 00:00:00 UTC timestamp unix ou epóca unix
console.log(data.toString());
const data1 = new Date(2019, 3); // mês começa do zero
console.log(data1.toString());
const data2 = new Date('2019-04-20 20:20:59');
console.log(data2.toString());
const date3 = new Date('2019-04-20T20:20:59.100');
console.log('Dia', date3.getDate());
console.log('Mês', date3.getMonth() + 1); // mês começa do zero
console.log('Ano', date3.getFullYear());
console.log('Hora', date3.getHours());
console.log('Minutos', date3.getMinutes());
console.log('Segundos', date3.getSeconds());
console.log('Milissegundos', date3.getMilliseconds());
console.log('Dia da semana', date3.getDay()); // 0 - domingo, 6 - sábado
console.log(date3.toString());
console.log(Date.now()); // retorna o timestamp unix atual
console.log(new Date(1774724899124)); // data a partir do timestamp unix
*/
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // mês começa do zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);