// if pode ser usado sozinho
// else if deve ser usado depois de um if
// else deve ser usado no final de uma sequência de if, e só pode ser usado uma vez

const hora = 24
if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!");
} else {
    console.log("Olá!");
}