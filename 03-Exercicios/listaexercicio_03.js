let precoEtiqueta = 100;

//  "1 = Débito" "2 = Dinheiro ou PIX" "3 = Crédito"
let tipoPagamento = 4;

let parcelasNoCartaoDeCredito = 3;

let valorASerPago = 0;

if (tipoPagamento === 3) {
    if (parcelasNoCartaoDeCredito <= 2) {
        console.log(`O valor a ser pago em até 2x sem juros no cartão de credito é R$${precoEtiqueta.toFixed(2)}`);
    } else {
        valorASerPago = precoEtiqueta + (precoEtiqueta * (10 / 100));
        console.log(`O valor a ser pago em 3x ou mais vezes, com juros no cartão de credito é R$${valorASerPago.toFixed(2)}`);
    }
} else if (tipoPagamento === 2) {
    valorASerPago = precoEtiqueta - (precoEtiqueta * (15 / 100));
    console.log(`O valor a ser pago com desconto no Dinheiro ou Pix é R$${valorASerPago.toFixed(2)}`);
} else if (tipoPagamento === 1) {
    valorASerPago = precoEtiqueta - (precoEtiqueta * (10 / 100));
    console.log(`O valor a ser pago com desconto no cartão de débito é R$${valorASerPago.toFixed(2)}`);
} else {
    console.log(`Forma de pagamento selecionada não existe, favor informar uma forma de pagamento válida`)
}