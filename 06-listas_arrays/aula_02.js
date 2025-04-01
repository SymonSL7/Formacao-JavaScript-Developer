const nome = "Symon Silva Lima";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("-------------------------------------------------------------------------------------------------");

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(10);

let soma = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {

    soma += notas[i];
    media = soma / (i+1);

}

console.log(`A média das notas é ${media.toFixed(3)}`);
