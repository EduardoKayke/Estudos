// Introdução aos Arrays
// São conhecidos como vetores ou matrizes unidimensionais.
// Arrays em JavaScript são objetos indexados.
// ìndices -> Posição do elemento no array.
// [0][1][2][3][4] = 5 elementos
// Array contendo 5 elementos -> n = 5


// Valores em um array
// [12][`Geek`][36][true][52] = 5 elementos

// Detalhes sobre arrays
// Possuem tamanho infinito
// podemos colocar qualquer tipo de dado

// Forma 1
var alunos = new Array(`Cristina`, `Eduardo`, `Fernando`, `Joana`, `Maria`);
// console.log(alunos);

// Forma 2 (Recomendada)
var notas = [1, 3, 5, 7, 9];
// console.log(notas);

// Criando um array vazio.
var dados = [];
// console.log(dados);

// Fazendo acesso ao valor de um índice.
// console.log(notas[2])

// Alterando o valor a partir do índice.
notas[2] = 12;
// console.log(notas);

// ATENÇÃO AO ACESSAR UM VALOR COM UM ÍNDICE QUE NÃO EXISTE.
notas[9] = 10;
console.log(notas);
//resposta - [ 1, 3, 12, 7, 9, <4 empty items>, 10 ]

console.log(notas[5] == undefined); // true

if (notas[5] == undefined) {
    notas[5] = 54;
}

// console.log(notas[5]); // 54
// console.log(notas[6]); // Undefined
// console.log(notas[7]); // Undefined
// console.log(notas[8]); // Undefined
// console.log(notas[9]); // 10

// Inserindo elementos no final do array
var nomes = ['paula', 'Maria', 'Julia'];
// console.log(nomes);

nomes.push('Vanessa'); // Insere o valor no final do array
// console.log(nomes);

// Tamanho do array.
// console.log(nomes.length); // 4 elementos.

var tamanho = nomes.length;
// console.log(tamanho); // 4 elementos.

// Ordenar os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mario', 'Ana', 'Carla'];
console.log(alunos);

alunos.sort(); // Ordenando array de strings.
console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23.12];
console.log(precos);

// precos.sort(); // O método sort considera que todos os valores do array são strings. E dai ele ordena em ordem alfabética.
// No caso do array preços ele ordenou pelos primeiros números em ordem crescente. E a mesma coisa aconteceu no array abaixo.
var idades = [5, 1, 8, 12, 44, 78]; // [ 1, 12, 44, 5, 78, 8 ]
idades.sort();
console.log(idades);

// Para ordenar inteiros e floats devemos criar uma função para o .sort().
precos.sort(function(a, b) {
     return a - b;
    });
    console.log(precos)

idades.sort(function(a, b) {
    return a - b;
})
// console.log(idades);

// Deletando dados de um array.
delete idades[3];
// console.log(idades); // [ 1, 5, 8, <1 empty item>, 44, 78 ]

idades[3] = 12;
console.log(idades);

// [ 1, 5, 8, 44, 78 ]
// idades.splice(3, 1); // A partir do índice 3 delete 1 elemento.
// console.log(idades);

// idades.splice(3, 0, 56, 89); // A partir do índice 3 não delete nenhum (0), mas adicione 56, 89.
// console.log(idades); // [ 1,  5,  8, 56, 89, 12, 44, 78 ]

idades.splice(3, 1, 23) // Delete o 12 e adicione o 23.
console.log(idades); // [ 1, 5, 8, 23, 44, 78 ]

for(var i = 0; i < idades.length; i++) {
    // console.log(idades[i]);
;}
// Removendo elementos da última posição do array.
// idades.pop();
// console.log(idades);

// var ret = idades.pop(); // Remove e retorna o último elemento de um array.
// console.log(ret);
// console.log(idades);

// Removendo o primeiro elemento de um array.
// console.log(idades);
// idades.shift(); // Remove e retorna o último elemento de um array.
// console.log(idades);

// var retShift = idades.shift();
// console.log(retShift);
// console.log(idades);

// Inserindo elementos no início de um array.
// idades.unshift(99);
// console.log(idades);

// Retorna um novo array a partir do índice informado.
// var novo = idades.slice(3);
// console.log(novo);

// var novo = idades.slice(1, 2); // A partir do índice 1, pegue até o índice 2 sem inclui-lo.
// console.log(novo); // [ 1, 5, 8, 23, 44, 78 ] pegou [ 5 ]

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
// console.log(rest);

rest = impares.concat(pares);
// console.log(rest);

rest.sort(function(a, b) {
    return a - b;
});
// console.log(rest);

// Array de array = matrizes. exemplo (4x4)

var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(tabuleiro);

/**
 * 0: (4) [1, 2, 3, 4]
 * 1: (4) [5, 6, 7, 8]
 * 2: (4) [9, 10, 11, 12]
 * 3: (4) [13, 14, 15, 16]
 * length: 4
 * 
 */

console.log(tabuleiro[0][0]); // Resultado 1.
console.log(tabuleiro[2][2]); // Resultado 11.