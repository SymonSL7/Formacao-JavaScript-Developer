const { gets, print } = require("./funcoes-auxiliares-ex2");

let numeroPar = null;
let numeroImpar = null;
let quantidadeNumeros = gets();

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if ((numero % 2) === 0) {

        if (numeroPar === null || numero > numeroPar) {
            numeroPar = numero
        }

    } else {

        if (numeroImpar === null || numero < numeroImpar) {
            numeroImpar = numero;
        }

    }
}

print(`O maior número par é ${numeroPar}`);
print(`O menor número impar é ${numeroImpar}`);