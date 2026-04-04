function calcularIMC(peso, altura) {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const imc = peso / (altura * altura);
        if (isNaN(imc)) {
            document.getElementById('resultado').textContent = 'Valor inválido';
            document.getElementById('resultado').style.backgroundColor = 'red';
            return;
        }
        console.log(imc);
        if (imc) {
            if (imc < 18.5) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Abaixo do peso)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else if (imc <= 18.5 && imc <= 24.9) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Peso normal)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else if (imc <= 25 && imc <= 29.9) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Sobrepeso)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else if (imc <= 30 && imc <= 34.9) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Obesidade 1)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else if (imc <= 35 && imc <= 39.9) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Obesidade 2)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else if (imc >= 40) {
                document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}. (Obesidade 3)`;
                document.getElementById('resultado').style.backgroundColor = 'green';
            } else {
                document.getElementById('resultado').textContent = 'Valor inválido';
                document.getElementById('resultado').style.backgroundColor = 'red';
            }
        }
    });
}

calcularIMC();