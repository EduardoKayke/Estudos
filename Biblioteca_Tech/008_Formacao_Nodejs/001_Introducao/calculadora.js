var podemos = 12;

function soma(a, b){
    return a + b;
};

function mult(a, b){
    return a * b;
};

function sub(a, b){
    return a - b;
};

function div(a, b){
    return a / b;
};

// module.exports = soma;
// module.exports = podemos;

// Podemos exportar variáveis também

// Pra exportar tudo de uma vez, podemos fazer assim:

module.exports = {
    soma,
    mult, 
    sub,
    div,
    podemos
};