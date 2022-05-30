// Função sem retorno

function imprimirSoma(a = 0, b = 1){
    console.log(a + b);
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // 3
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // 5
imprimirSoma() // 1

// Função com retorno

function soma(a, b = 0){
    return a + b
}

let somando = soma(2, 3)
console.log(somando); // 5

console.log(soma(2, 3)); // 5