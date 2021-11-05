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

// Para ordenar inteiros e floats devemos criar uma função pro .sort().
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
idades.splice(3, 1); // A partir do índice 3 delete 1 elemento.
console.log(idades);