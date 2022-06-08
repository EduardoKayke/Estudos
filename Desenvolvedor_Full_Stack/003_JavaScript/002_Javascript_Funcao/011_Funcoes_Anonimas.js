//Função Anônima é uma função sem nome.

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7

// vamos trocar o param de operação, colocando outro param agora.
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // -1
imprimirResultado(3, 4, (x, y) => x * y) // 12

// Função Anônima dentro de objeto
const pessoa = {
    falar: function() { // <-- Essa é uma função anônima
        console.log('Opa');
    },
    correr: () => console.log('Correndo'), // <-- Essa é uma arrow function sem parâmetros. Sempre é uma função anônima se for uma arrow function. 
    idade: 12
}
pessoa.falar()// Opa