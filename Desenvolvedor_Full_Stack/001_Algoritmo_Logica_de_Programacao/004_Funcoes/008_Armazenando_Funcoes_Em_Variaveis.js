// Podemos colocar a função dentro de uma variável.
// Função anônima não possui nome.

const somar = function (a, b) {
    return a + b;
}

console.log(somar(2, 4));

// Mais sobre o assunto.

function subtrair(a, b){
    return a - b;
}

const subtracao = subtrair;

console.log(subtrair(5, 2));
console.log(subtracao(5, 2));