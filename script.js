// Dados baseados na planilha do usuário
const itensViagem = [
    { categoria: "Passagem de avião", preco: 1300.00, quantidade: 1 },
    { categoria: "Hospedagem", preco: 200.00, quantidade: 5 },
    { categoria: "Alimentação", preco: 100.00, quantidade: 5 },
    { categoria: "Transporte", preco: 50.00, quantidade: 3 }
];

// Função para formatar os números no padrão de moeda Real (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função principal para renderizar a tabela e calcular os totais
function carregarTabela() {
    const corpoTabela = document.getElementById("tabela-corpo");
    const elementoTotal = document.getElementById("valor-total");
    let custoTotalGeral = 0;

    // Limpa a tabela antes de preencher
    corpoTabela.innerHTML = "";

    // Percorre a lista de itens gerando as linhas da tabela
    itensViagem.forEach(item => {
        const valorFinalItem = item.preco * item.quantidade;
        custoTotalGeral += valorFinalItem;

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${item.categoria}</td>
            <td>${formatarMoeda(item.preco)}</td>
            <td>${item.quantidade}</td>
            <td><strong>${formatarMoeda(valorFinalItem)}</strong></td>
        `;

        corpoTabela.appendChild(linha);
    });

    // Atualiza o valor total no rodapé da tabela
    elementoTotal.innerHTML = `<strong>${formatarMoeda(custoTotalGeral)}</strong>`;
}

// Executa a função assim que a página termina de carregar
window.onload = carregarTabela;
