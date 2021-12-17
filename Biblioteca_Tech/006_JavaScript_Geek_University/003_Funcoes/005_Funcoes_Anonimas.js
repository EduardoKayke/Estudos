/**
 * Funções Anônimas = Lambdas
*/

let numeros = [1, 2, 3, 4, 5, 6]

function dobrar(valor){
    return valor * 2;
}

let res1 = numeros.map(dobrar);

console.log(numeros);
console.log(res1);

// Funções Anônimas - Lambdas

let res2 = numeros.map(function(valor){
    return valor * 3;
})

console.log(res2);

console.log(`-------------------------------`);

// A função normal você pode utilizar em outros locais, já a lambda não.

// O poder das funções.

function somar(v1, v2){
    return v1 + v2;
}

let mostrar = function(n1, n2, calcular = somar){
    console.log(calcular(n1, n2));
}

mostrar(2, 3); // 5
mostrar(6, 9, somar); // 15

mostrar(3, 6, function(n1, n2){
    return n1 + n2;
}); // 9

mostrar(3, 6, (v1, v2) => v1 * v2); // 18