function inserirPreco() {
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    return preco;
}

function calcularPrecoComICMS(preco, percentualICMS) {
    percentualICMS = parseFloat(prompt("Insira o percentual de ICMS(apenas os dígitos):"));
    let precoComICMS = preco * (1+percentualICMS / 100);
    return precoComICMS;
}

function mostrarPrecoCalculado(precoComICMS) {
    console.log(`O preço com ICMS é: R$ ${precoComICMS}`);
    alert(`O preço com ICMS é: R$ ${precoComICMS}`);
}

function processarICMS() {
    let preco = inserirPreco();
    let precoComICMS = calcularPrecoComICMS(preco);
    mostrarPrecoCalculado(precoComICMS);
}

processarICMS();