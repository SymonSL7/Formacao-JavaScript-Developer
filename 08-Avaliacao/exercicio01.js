const { gets, print } = require("./funcoes-auxiliares-ex1");

const nota = gets();

if (nota < 5) {
    print("Reprovado");
} else if (nota < 7) {
    print("Recuperação");
} else {
    print("Aprovado");
}