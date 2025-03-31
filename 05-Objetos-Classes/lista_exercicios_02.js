class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        if (this.calcularImc() < 18.5) {
            return (`Eu sou o ${this.nome} e estou abaixo do peso, valor do IMC é ${this.calcularImc().toFixed(3)}`)
        } else if (this.calcularImc() >= 18.5 && this.calcularImc() < 25) {
            return (`Eu sou o ${this.nome} e estou com peso normal, valor do IMC é ${this.calcularImc().toFixed(3)}`)
        } else if (this.calcularImc() >= 25 && this.calcularImc() < 30) {
            return (`Eu sou o ${this.nome} e estou acima do peso, valor do IMC é ${this.calcularImc().toFixed(3)}`)
        } else if (this.calcularImc() >= 30 && this.calcularImc() < 40) {
            return (`Eu sou o ${this.nome} e estou obeso(a), valor do IMC é ${this.calcularImc().toFixed(3)}`)
        } else {
            return (`Eu sou o ${this.nome} e estou com obesidade grave, valor do IMC é ${this.calcularImc().toFixed(3)}`)
        }
    }
}

const jose = new Pessoa("José", 70, 1.75)
console.log(jose.classificarImc());

const symon = new Pessoa("Symon", 76, 1.72)
console.log(symon.classificarImc());
