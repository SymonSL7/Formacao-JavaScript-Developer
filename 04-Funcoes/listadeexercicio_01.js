function escreverNome(nome) {
    return `Meu nome é ${nome}`;
}

function verificarIdade(idade,nome) {
    if(idade >= 18){
        return escreverNome(nome) + " e sou maior de Idade";
    } else {
        return escreverNome(nome) + " e sou menor de Idade";
    }
 
}

(function (){
    console.log(escreverNome('Symon'));
    console.log(escreverNome('Cida'));
    console.log('-------------------------------------------------------------------------------------------');
    console.log(verificarIdade(27,'Symon'));
    console.log(verificarIdade(17,'Maria'));
})();