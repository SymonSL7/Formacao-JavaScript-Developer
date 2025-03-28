const peso = 76.30;
const altura = 1.72;

const imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
    console.log(`A pessoa está abaixo do peso, valor do IMC é ${imc.toFixed(3)}`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`A pessoa está com peso normal, valor do IMC é ${imc.toFixed(3)}`)
} else if (imc >= 25 && imc < 30) {
    console.log(`A pessoa está acima do peso, valor do IMC é ${imc.toFixed(3)}`)
} else if (imc >= 30 && imc < 40) {
    console.log(`A pessoa está obesa, valor do IMC é ${imc.toFixed(3)}`)
} else {
    console.log(`A pessoa está com obesidade grave, valor do IMC é ${imc.toFixed(3)}`)
}