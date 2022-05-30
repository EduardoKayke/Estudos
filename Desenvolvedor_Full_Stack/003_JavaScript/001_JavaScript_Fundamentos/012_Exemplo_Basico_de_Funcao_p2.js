// Armazenando uma função em uma variável
// Função anônima, função sem nome.

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 3) // 5

// Armazendando uma função arrow em uma variável com retorno implícito.

const soma = (a, b) => a + b; // Não precisa por return

console.log(soma(2, 3)); // 5