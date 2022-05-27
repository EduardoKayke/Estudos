function somar(a, b, c, d) {
    return a + b + c + d;
}

console.log(somar(1, 1, 1, 1));

console.log(somar(1, 2, 3, 4)); // 10
console.log(somar(1, 2, 3)); // NaN - Falta de parâmetro.
console.log(`Fim!`);

// Como ter a flexibilidade de não usar todos os parâmetros.

function somaEx(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}

console.log(somaEx(1, 1, 1, 1));

console.log(somaEx(1, 2, 3, 4)); // 10
console.log(somaEx(1, 2, 3)); // 
console.log(somaEx(1, 2)); // 
console.log(somaEx(1)); // 
console.log(somaEx()); // 
console.log(`Fim!`);