const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
]

const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    /*console.log(elementos[i].tag);
    console.log(elementos[i].texto);*/
    let { tag, texto } = elementos[i]; // desestruturação
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    // tagCriada.innerText = texto;
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
console.log(elementos);

/*function criarDiv() {
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
}*/
