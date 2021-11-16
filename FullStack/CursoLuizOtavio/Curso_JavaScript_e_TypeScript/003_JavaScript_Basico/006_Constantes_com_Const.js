/* Não podemos criar constantes com palavras reservadas ao JavaScript.
 * Constantes precisam ter nomes significativos.
 * Não pode começar o nome de uma constante com número.
 * As Constantes não podem conter traços ou espaços.
 * Não podemos modificar o valor de uma Constante.
 * Utilizamos camelCase.
 * Não utilize var, utilize const.
*/

const nome = 'João';

console.log(nome);

/**
 * Podemos pegar uma constante ou uma variável e atribuir a outra constante ou variável.
 */

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(primeiroNumero + segundoNumero);
console.log(typeof(primeiroNumero + segundoNumero));