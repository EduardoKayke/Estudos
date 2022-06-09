function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49));
// { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }

console.log(criarProduto('iPad', 1199.49));
// { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
