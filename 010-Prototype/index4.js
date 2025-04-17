
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

const novaPessoa = {
    genero: 'Masculino'
}

Pessoa.call(novaPessoa, "Symon", 27);

console.log(novaPessoa);

console.log("--------------------------------------------------------------------------------------------------------");

String.prototype.toPLang = function() {
    return `P ${this};`
}

console.log("Teste".toPLang());