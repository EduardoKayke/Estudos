// Escopo de variaveis

var teste = 42; // Var global.
console.log(teste);

function somar (num1, num2) {
    // variável local
    var valor = 5;
    return valor + num1 + num2;
};

console.log(somar(4,6));

// console.log(valor); Não funciona por fora. Pois esta dentro da função.

for (var i = 0; i < 5; i++) {
    var outra = 5;// Var global.
    console.log(i * outra);
};

console.log(outra); // Temos acesso pois foi declarada em um bloco for.
console.log(i); // Temos acesso pois foi declarada em um bloco for.

for (var j = 0; j < 5; j++) {
    let uma = 12;
    console.log(j * uma);
};

// console.log(uma); Não temos acesso pois foi declarada em uma let. Let vira uma variavel local.
console.log(j); // Temos acesso pois foi declarada em um bloco for.
