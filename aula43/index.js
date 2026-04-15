// função pra saber se num é um número ou não
/*const enumero = (num) => typeof num === "number";

function eDivisivel(num) {
    if (enumero(num)) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz!";
        } else if (num % 3 === 0) {
            return "Fizz!";
        } else if (num % 5 === 0) {
            return "Buzz!";
        } else {
            return num;
        }

    } else {
        return num;
    }
}

console.log(eDivisivel(3)); // Fizz!
console.log(eDivisivel(5)); // Buzz!
console.log(eDivisivel(15)); // FizzBuzz!
console.log(eDivisivel(7)); // 7
console.log(eDivisivel("7")); // Não é um número!*/

function fizzBuzz(numero) {
    if (typeof numero !== "number") return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";
    return numero;

}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}