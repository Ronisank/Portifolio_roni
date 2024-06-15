const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 2999.99 },
    { nome: "Boné", valor: 14.99 }
];

const listaProdutos = document.getElementById('lista-produtos');

function renderizarProduto(produto) {
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');

    const nomeProduto = document.createElement('h2');
    nomeProduto.innerText = produto.nome;
    divProduto.appendChild(nomeProduto);

    const valorProduto = document.createElement('p');
    valorProduto.innerText = `R$ ${produto.valor.toFixed(2)}`;
    divProduto.appendChild(valorProduto);

    listaProdutos.appendChild(divProduto);
}

produtos.forEach(renderizarProduto);
