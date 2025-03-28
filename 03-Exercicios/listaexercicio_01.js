let nota1 = 4;
let nota2 = 5;
let nota3 = 5;

let quantidadeDeNotas = 3;

let media = (nota1 + nota2 + nota3) / quantidadeDeNotas;

if ( media < 5 ) {
    console.log(`Aluno foi REPROVADO! Sua média foi de ${media.toFixed(3)}`)
} else if ( media >= 5 && media <= 7 ) {
    console.log(`Aluno está de RECUPERAÇÃO! Sua média foi de ${media.toFixed(3)}`)
} else {
    console.log(`Aluno foi APROVADO! Sua média foi de ${media.toFixed(3)}`)
}

