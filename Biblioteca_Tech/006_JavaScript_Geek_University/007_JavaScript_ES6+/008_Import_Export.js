/**
 * Import e Export
 *  
 * Isso é ótimo para que várias pessoas trabalhem em arquivos 
 * diferentes. Todos os arquivos abaixo, foram para o
 * main.js pelo export default, export ou inport.
*/


// Tudo o que foi feito nessa aula eu deixarem aqui. 
// Lembre sempre de dar o init que é o comando no terminal.
// yarn dev (comando)



//===========================================================
// Primeiro arquivo main.js

// Perceba que é só jogar no import.
// Perceba que podemos mudar o nome como quisermos.
// Os default ficam fora da chave.

// import { soma as somarMais, subtracao } from './helper';
// import dobrar from './dobrar';
// import quadrado, { metade, MEUPI } from './funcoes';

// console.log(somarMais(40, 2));
// console.log(subtracao(82, 40));
// console.log(dobrar(8));
// console.log(quadrado(7));
// console.log(metade(8));
// console.log(MEUPI);

// //Podemos importar todas as funções comuns.
// // Não pode ter default no arquivo. Não funciona com default.
// //Basta usar o * e o as.
// import * as helpers from './helper';

// console.log(helpers.soma(5, 9));
// console.log(helpers.subtracao(9, 4));




//===========================================================
// Segundo arquivo helper.js

// export function soma(num1, num2){
//     return num1 + num2;
// }

// export function subtracao(num1, num2){
//     return num1 - num2;
// }




//===========================================================
// Terceiro arquivo dobrar.js

// export default não precisa de chaves. Veja no main.js
// Há duas formas de fazer os exports dos módulos. 
// Há a forma explicita (nomed) e a padrão (default). 
// Em um módulo onde somente tenha exports nomeado podem 
// haver vários exports, mas caso o seu export seja default
// ele é exclusivo, ou seja, só pode haver um único export
// dentro daquele script.

// export default function dobrar(num1){
//     return num1 * 2;
// }



//===========================================================
// Quarto arquivo funcoes.js

// export default function quadrado(num1){
//     return num1 * num1;
// }

// export function metade(num1){
//     return num1 / 2;
// }

// export const MEUPI = 3.14159;