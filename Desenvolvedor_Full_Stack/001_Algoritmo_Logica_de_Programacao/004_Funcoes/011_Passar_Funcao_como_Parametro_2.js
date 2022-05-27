function executar(fn, n1, n2) {
    if(typeof fn === "function") {
        console.log(fn(n1, n2));
    }
}

function somar(a = 0, b = 0) {
    return a + b;
}

function subtrair(a = 0, b = 0) {
    return a - b;
}

function multiplicar(a = 0, b = 0) {
    return a * b;
}

executar(somar, 2, 2);
executar(subtrair, 3, 2);
executar(multiplicar, 2, 2);