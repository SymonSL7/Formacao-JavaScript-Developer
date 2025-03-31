class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }

}

const symon = new Pessoa();
symon.nome = "Symon Silva Lima";
symon.idade = 27;

const joao = new Pessoa();
joao.nome = "João Victor"
joao.idade = 20;

console.log(symon);
console.log(joao);

symon.descrever();
joao.descrever();

const pedro = new Pessoa("Pedro Henrique", 22);

pedro.descrever();