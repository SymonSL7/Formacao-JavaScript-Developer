function definirPorcentagem(porcentagem) {
    return porcentagem / 100;
}

function calcularDesconto(valor, porcentagem) {
    return valor - (valor * definirPorcentagem(porcentagem));
}

function calcularAcrescimo(valor, porcentagem) {
    return valor + (valor * definirPorcentagem(porcentagem));
}

function precoAPagarDeAcordoComAFormaDePagamento(precoEtiqueta, tipoPagamento, parcelasNoCartaoDeCredito) {

    if (tipoPagamento === 3) {
        if (parcelasNoCartaoDeCredito <= 2) {
            return (`O valor a ser pago em até 2x sem juros no cartão de credito é R$${precoEtiqueta.toFixed(2)}`);
        } else {
            valorASerPago = calcularAcrescimo(precoEtiqueta, 10);
            return (`O valor a ser pago em 3x ou mais vezes, com juros no cartão de credito é R$${valorASerPago.toFixed(2)}`);
        }
    } else if (tipoPagamento === 2) {
        valorASerPago = valorASerPago = calcularDesconto(precoEtiqueta, 15);
        return (`O valor a ser pago com desconto no Dinheiro ou Pix é R$${valorASerPago.toFixed(2)}`);
    } else if (tipoPagamento === 1) {
        valorASerPago = calcularDesconto(precoEtiqueta, 10);
        return (`O valor a ser pago com desconto no cartão de débito é R$${valorASerPago.toFixed(2)}`);
    } else {
        return (`Forma de pagamento selecionada não existe, favor informar uma forma de pagamento válida`)
    }


}

(function () {

    //Valor original do produto na etiqueta.
    precoEtiqueta = 100;
    //Escolha o tipo de pagamento "1 = Débito" "2 = Dinheiro ou PIX" "3 = Crédito"
    tipoPagamento = 3;
    //Se o pagmento for no Crédito defina a quantidade de parcelas, acima de 3x, tem juros de 10%.
    parcelasNoCartaoDeCredito = 3;
    console.log(precoAPagarDeAcordoComAFormaDePagamento(precoEtiqueta, tipoPagamento, parcelasNoCartaoDeCredito));

})();