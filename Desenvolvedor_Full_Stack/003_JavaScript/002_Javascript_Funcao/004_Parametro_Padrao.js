// Estratégia para gerar valor padrão
// Aula 91 curso web moderno. Assista caso não entenda.
// Isso era antigamente.

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma(1, 2)); // 4
console.log(soma(2)); // 4
console.log(soma(2, 1, 1)); // 4
console.log(soma(0, 0, 0)); // 3
console.log(soma()); // 3

// estratégia 2, 3 e 4 para gerar valor padrão
function soma1(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // A mais segura.
    
    return a + b + c
}
console.log(soma1(1, 2)); // 4
console.log(soma1(2)); // 4
console.log(soma1(2, 1, 1)); // 4
console.log(soma1(0, 0, 0)); // 0
console.log(soma1()); // 3

// Valor padrão do ES2015
function soma2(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(1, 2)); // 4
console.log(soma2(2)); // 4
console.log(soma2(2, 1, 1)); // 4
console.log(soma2(0, 0, 0)); // 0
console.log(soma2()); // 3