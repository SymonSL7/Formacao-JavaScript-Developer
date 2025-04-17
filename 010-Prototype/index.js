//Protótipos em JavaScript
const pessoa = {
    genero: "Masculino"
}

const aluno = {
    nome: "Lucas",
    idade: 30,
    __proto__: pessoa
}

console.log(aluno.genero);

console.log("----------------------------------------------------------------------------------");

function Pessoa2(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const aluno2 = new Pessoa2("Pedro", 25);

console.log(aluno2);

Pessoa2.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`);
}

aluno2.falar();

Pessoa2.prototype.genero2 = "Masculino";
console.log(aluno2.genero2);

console.log("----------------------------------------------------------------------------------");

class Pessoa3 {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }

}

const aluno3 = new Pessoa3("João", 25)

console.log(aluno3);

aluno3.falar();

Pessoa3.prototype.genero3 = "Masculino";
console.log(`Gênero: ${aluno3.genero3}`);
Pessoa3.prototype.falarIdade = function(){
    console.log(`Minha idade é ${this.idade}`)
}
aluno3.falarIdade();