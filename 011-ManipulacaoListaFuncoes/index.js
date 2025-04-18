
function falaMeuNome() {
    console.log(`Meu nome é Symon`);
}

const referenciaNova = falaMeuNome;

referenciaNova();


console.log("-------------------------------------------------------------------------------------------------------------------------------");

function falarMeuNomeCompleto(falaMeuNome) {
    falaMeuNome();
    console.log(`Silva Lima`);
;}

falarMeuNomeCompleto(falaMeuNome);

console.log("-------------------------------------------------------------------------------------------------------------------------------");

const nomeDeOutraFuncao = function() {
    console.log(`Olá, tudo bem?`);
}

nomeDeOutraFuncao();

console.log("-------------------------------------------------------------------------------------------------------------------------------");

function funcao1() {
    console.log(this);
}

const funcao2 = () => {
    console.log(this);
}

const pessoa = {
    nome: 'Symon',
    funcao1,
    funcao2
}

pessoa.funcao1();
pessoa.funcao2();