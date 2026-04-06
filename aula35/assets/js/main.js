const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

function criarDiv() {
    let div = document.createElement('div');
    let container = document.querySelector('.container');
    container.appendChild(div);
    return div;
}

let minhaDiv = criarDiv()

function criarElemento(tag, texto) {
    let elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    minhaDiv.appendChild(elemento);
}

for (let i = 0; i < elementos.length; i++) {
    let tag = elementos[i].tag;
    let texto = elementos[i].texto;
    criarElemento(tag, texto);
}