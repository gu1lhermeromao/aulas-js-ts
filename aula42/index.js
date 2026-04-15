function ePaisagem (largura, altura) {
    return  largura > altura ? true : false
}

const ePaisagem2 = (largura, altura) => largura > altura

console.log(ePaisagem(1080, 720)) // true
console.log(ePaisagem(720, 1080)) // false
console.log('---segunda função---')
console.log(ePaisagem2(1080, 720)) // true
console.log(ePaisagem2(720, 1080)) // false

function ePaisagem3 (largura, altura) {
    return  largura > altura
}

console.log('---terceira função---')
console.log(ePaisagem3(1080, 720)) // true
console.log(ePaisagem3(720, 1080)) // false