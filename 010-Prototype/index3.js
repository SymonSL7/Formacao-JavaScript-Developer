const pessoa = {
    genero: "Masculino"
}

const aluno = Object.create(pessoa);

aluno.nome = "Symon";

console.log(aluno);
console.log(aluno.genero);
