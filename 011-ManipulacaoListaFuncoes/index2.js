
function soma(x) {

    return function(y) {
        return x + y;
    }

}

console.log(soma(10)(20));

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));

console.log("-------------------------------------------------------------------------------------------------------------------------------");

const pessoa = {
    nome: 'Symon',
    idade: 27
}

function gritar (prefixo){
    console.log(prefixo, this.nome);
}

gritar('Olaaa')

gritar.apply(pessoa, ['Olaaaaaaaaa']);

gritar.call(pessoa, 'Olaaaaaaaaaaaaaaa');


