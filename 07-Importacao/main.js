
const {gets, print} = require("./funcoes-auxiliares");

const quantidadeAlunos = gets();
let maiorValoEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValoEncontrado){
        maiorValoEncontrado = numeroSorteado
    }
}

print(maiorValoEncontrado);