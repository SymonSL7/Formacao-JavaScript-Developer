const precoCombustivel = 6.60;
const kmPorLitro = 12;
let distanciaEmKm, valorTotal;

distanciaEmKm = 390;

valorTotal = (distanciaEmKm / kmPorLitro) * precoCombustivel;

console.log(`O valor total gasto para percorrer ${distanciaEmKm }km é de R$${valorTotal.toFixed(2)}`);