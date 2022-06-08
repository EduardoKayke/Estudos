console.log(soma(3, 4));

// function declaration: podemos chamar o console antes, pois ela é carregada antes.
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}