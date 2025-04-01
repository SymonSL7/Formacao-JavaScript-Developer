let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let listaNumerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if ((numero % 2) === 0) {
        listaNumerosPares.push(numero);
    }
}

console.log(listaNumerosPares)

console.log("-------------------------------------------------------------------");

for (let i = 0; i < listaNumerosPares.length; i++){
    let numerosPares = listaNumerosPares[i];
    console.log(numerosPares)
}

