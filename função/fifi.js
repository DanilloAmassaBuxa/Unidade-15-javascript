function calcularViagem(passagem, hospedagem, alimentacao, passeios) {
    const total = passagem + hospedagem + alimentacao + passeios;
    const orcamento = 2000;

    console.log(`Custo total da viagem: R$ ${total.toFixed(2)}`);

    if (total <= orcamento) {
        console.log("A viagem está dentro do orçamento de R$ 2.000,00, sortudo vc.");
        console.log(`Valor restante: R$ ${(orcamento - total).toFixed(2)}`);
    } else {
        console.log("A viagem está acima do orçamento de R$ 2.000,00, seu pobre.");
        console.log(`Valor excedente: R$ ${(total - orcamento).toFixed(2)}`);
    }
}

let passagem = Number(prompt("Digita ai o valor da passagem:"));
let hospedagem = Number(prompt("Digita ai o valor da hospedagem:"));
let alimentacao = Number(prompt("Digita ai o valor da alimentação:"));
let passeios = Number(prompt("Digita ai o valor dos passeios:"));

calcularViagem(passagem, hospedagem, alimentacao, passeios);
