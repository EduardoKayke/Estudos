/**
 * First Class Citizens
 * 
 * Função é o coração do JavaScript
 */

function somar(num1, num2){
    return num1 + num2;
}

// Formas de trazer essa função.

let res = somar(4, 6);
console.log(res);

// Exemplo 1
console.log(somar(10, 5));

// Exemplo 3
const executar = somar;
console.log(executar(10, 7));

// Outra função como exemplo.

function subtrair(num1, num2){
    return num1 - num2;
}

function fazAlgo(num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(fazAlgo(5, 5, somar));
console.log(fazAlgo(8, 3, subtrair));

// Outra função como exemplo.

function outra(z){
    return z;
}

const ret = outra(somar);
console.log(ret(8, 2));

// Exemplo de função que não retorna nada.

function message(){
    console.log(`Evolua seu lado Geek...`);
}

message(); // Evolua seu lado Geek... (Isso acontece pq ela já tem o 
// console.log dentro da função)

let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}
