function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()); // R$ 18
console.log(produto.getPreco()); // R$ 3900.65

// Outras duas formas de executar isso seria com call e apply

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro)); // R$ 39992
console.log(getPreco.apply(carro)); // R$ 39992

// A diferença entre call e apply está na passagem de parâmetros.
console.log(getPreco.call(carro, 0.17, '$')); // $ 46790.64 -  No call passamos os parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])); // $ 46790.64 -  No apply passamos os parâmetros em um array.