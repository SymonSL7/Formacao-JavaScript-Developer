function sayMyName(name) {
    console.log('You name is ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

function main() {
    console.log('Programa princiapl');
    sayMyName('Symon');
    sayMyName('Pedro');
    console.log('---------------------------------------------------------------------------------');
    const quadradoDeDez = quadrado(10);
    console.log(quadradoDeDez)
    console.log('---------------------------------------------------------------------------------');
    console.log(incrementarJuros(100, 10));
    console.log(incrementarJuros(2000, 5));
    console.log(incrementarJuros(10000, 20));
}

main();