const numero = 0;

const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar){
    console.log("É Par!")
} else {
    console.log("É Impar!")
}

console.log("------------------------------------------------------------------------------");

const numero2 = 0;

const numeroDivisivelPor5 = (numero2 % 5) ===0;

if (numero2 === 0){
    console.log("O número é inválido!")
} else if (numeroDivisivelPor5) {
    console.log("É divisivel por 5!")
} else {
    console.log("Não é divisivel por 5!")
}