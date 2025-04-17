
const pessoa = {
    idade: 18
}

const aluno = {
    nome: "Lucas",
    __proto__: pessoa,
}

console.log(aluno.idade);