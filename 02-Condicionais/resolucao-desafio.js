const precoGasolina = 6;
const precoEtanol = 4;
const kmPorLitroGasolina = 10;
const kmPorLitroEtanol = 5;

let distanciaAPercorrer = 100;

//Definir o tipo de combustivel a ser usado.
let tipoCombustivel = 'Gasolina';

let litrosConsumidos = distanciaAPercorrer / kmPorLitroGasolina;

let valorTotal;

let isGasolina = tipoCombustivel === 'Gasolina';

if (isGasolina) {
    valorTotal = litrosConsumidos * precoGasolina;
    console.log(`O valor a ser gasto com gasolina para percorrer ${distanciaAPercorrer}km é de R$${valorTotal.toFixed(2)}`)
} else {
    valorTotal = litrosConsumidos * precoEtanol;
    console.log(`O valor a ser gasto com etanol para percorrer ${distanciaAPercorrer}km é de R$${valorTotal.toFixed(2)}`)
}