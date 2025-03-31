class Carro {

    marca;
    cor;
    gastoMedioDeCombustivelPorKm;

    constructor(marca, cor, kmsPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivelPorKm = 1/kmsPorLitro;
    }

    calcularGastoPorViajem(kmRodados, precoCombustivel) {
        const precoTotal = (kmRodados * this.gastoMedioDeCombustivelPorKm * precoCombustivel);
        return (`O preço total gasto pelo carro da marca ${this.marca} de cor ${this.cor} para rodar ${kmRodados}km é de ${precoTotal} reais`)

    }

}

const veloster = new Carro("Hyundai", "Preto", 10);
const m2 = new Carro("BMW", "Cinza Broklyn", 5)

console.log(veloster.calcularGastoPorViajem(100, 5));
console.log(m2.calcularGastoPorViajem(200, 10));
console.log(m2.calcularGastoPorViajem(50,10));
console.log(veloster.calcularGastoPorViajem(500, 5));
