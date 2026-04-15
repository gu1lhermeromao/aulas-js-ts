const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', iniciarRelogio);
pausar.addEventListener('click', pausarRelogio);
zerar.addEventListener('click', zerarRelogio);

let data = new Date(0, 0, 0, 0, 0, 0);
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        data.setSeconds(data.getSeconds() + 1);
        relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }, 1000);
}

function pausarRelogio() {
    clearInterval(timer);
}

function zerarRelogio() {
    clearInterval(timer);
    data = new Date(0, 0, 0, 0, 0, 0);
    relogio.innerHTML = '00:00:00';
}