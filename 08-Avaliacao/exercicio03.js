const { gets, print } = require("./funcoes-auxiliares-ex3");

const valorSalario = gets();
const valorBeneficio = gets();

function pegarPorcentagem(porcentagem){
    return porcentagem/100;
}

function calcularDesconto (valorSalario){
    if (valorSalario <= 1100) {
        return valorSalario * pegarPorcentagem(5);
    } else if (valorSalario <= 2500) {
        return valorSalario * pegarPorcentagem(10);
    } else {
        return valorSalario * pegarPorcentagem(15);
    }
}

function calcularSalario(valorSalario,valorBeneficio){
    return valorSalario - calcularDesconto(valorSalario) + valorBeneficio;
}

print(calcularSalario(valorSalario,valorBeneficio))
