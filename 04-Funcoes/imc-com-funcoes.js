
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return (`A pessoa está abaixo do peso, valor do IMC é ${imc.toFixed(3)}`)
    } else if (imc >= 18.5 && imc < 25) {
        return (`A pessoa está com peso normal, valor do IMC é ${imc.toFixed(3)}`)
    } else if (imc >= 25 && imc < 30) {
        return (`A pessoa está acima do peso, valor do IMC é ${imc.toFixed(3)}`)
    } else if (imc >= 30 && imc < 40) {
        return (`A pessoa está obesa, valor do IMC é ${imc.toFixed(3)}`)
    } else {
        return (`A pessoa está com obesidade grave, valor do IMC é ${imc.toFixed(3)}`)
    }
}

(function () {
    const peso = 76.30;
    const altura = 1.72;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();







