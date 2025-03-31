const objeto = {
    nome: 'Symon Silva Lima',
    idade: 27,
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

console.log("-------------------------------------------------------------")

objeto.descrever();
delete objeto.descrever;

console.log("-------------------------------------------------------------")

console.log(objeto.nome);
console.log(objeto.idade);

console.log("-------------------------------------------------------------")

console.log(objeto)

console.log("-------------------------------------------------------------")

objeto.altura = 1.72;
console.log(objeto);

console.log("-------------------------------------------------------------")

const atributo = "idade";
console.log(objeto[atributo]);

console.log("-------------------------------------------------------------")

console.log(objeto['nome']);

console.log("-------------------------------------------------------------")

objeto["nome"] = "Symon Lima";

console.log(objeto.nome);


