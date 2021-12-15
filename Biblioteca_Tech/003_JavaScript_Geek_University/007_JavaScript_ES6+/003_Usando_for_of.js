/**For of
 *  Forma de estrutura de repetição assim como o for.
 *  Facilita o trabalho com coleções.
*/

let nome = 'Geek University';

for(let letra of nome){
    console.log(letra);
}

let numeros = [1, 2, 3, 4, 5];

for(let numero of numeros){
    console.log(numero * 2);
}

// Usando o in
for(let indice in numeros){
    console.log(`Indice:${indice}, valor:${numeros[indice]}`);
}
// Indice:0, valor:1
// Indice:1, valor:2
// Indice:2, valor:3
// Indice:3, valor:4
// Indice:4, valor:5


// Usando for of pra varrer o map.
let cursos = new Map([
    [1, 'Programação para Leigos'],
    [2, 'Algoritmos e Lógica de Programação'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Programação em Python'],
    [6, 'Banco de Dados'],
    [7, 'Programação Web com Django Framework']
])

for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`);
}
// 1 - Programação para Leigos
// 2 - Algoritmos e Lógica de Programação
// 3 - Programação em C
// 4 - Programação em Java
// 5 - Programação em Python
// 6 - Banco de Dados
// 7 - Programação Web com Django Framework


// Chave/Valor
// for(let curso of cursos){
//     console.log(curso);
// }

// Somente a chave.
// for(let chave of cursos.keys()){
//     console.log(chave);
// }

// Somente o valor
// for(let valor of cursos.values()){
//     console.log(valor);
// }

// Chave e valor.
for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`);
}
// 1 - Programação para Leigos
// 2 - Algoritmos e Lógica de Programação
// 3 - Programação em C
// 4 - Programação em Java
// 5 - Programação em Python
// 6 - Banco de Dados
// 7 - Programação Web com Django Framework


// Acessando elementos de um conjunto
let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto){
    console.log(numero);
}