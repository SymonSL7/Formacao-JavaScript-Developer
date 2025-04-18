class Pessoa {
    constructor(name){
        this.name = name;
    }
}

const lista = [new Pessoa('Lucas'), new Pessoa('João'), new Pessoa('Maria'), new Pessoa('Ana')];

const listaNomes = lista.map((element) => element.name);

const listaHtml = lista.map((element) => {
    return`
    <li>
        ${element.name}
    </li>
    `
});

console.log(listaNomes);
console.log(listaHtml);