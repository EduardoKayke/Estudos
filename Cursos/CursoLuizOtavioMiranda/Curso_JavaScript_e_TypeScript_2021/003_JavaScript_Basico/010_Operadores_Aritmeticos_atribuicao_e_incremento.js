/**
 * Operadores Aritméticos. 
 * (+, -, /, *) - Mais, menos, divisão e multiplicação.
 * 
 *  + = Adição / Concatenação
 *  - =  Subtração.
 *  / = Divisão.
 *  * = Multiplicação.
 *  ** = Potenciação. 
 *  % = Resto da divisão.
 */

const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // Soma.
console.log(num1 + '10'); // Concatenação = Unir.

const num3 = 10;
const num4 = 3;
console.log(num3 % num4);

// Esse contador só faz incremento de um em um.
// contador ++ Incremento e contador -- Decremento.
let contador = 10;
// contador ++;
// ++ contador;
// console.log(contador ++);
contador --;
console.log(contador);
// Uma boa prática de programação é usar o console pra trazer o resultado já pronto do contador. Evita bugs.

// Para fazermos mais incrementos devemos fazer o seguinte;
const passo = 2;
contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
// Outra forma.
contador += passo; // Isso é igual a contador = contador + passo. Podemos fazer *=, -= e etc...
console.log(contador);
// Podemos trocar o passo pelo número.
// contador += 2;

// NaN - Not a number, resolva assim;
const num7 = 10;
const num8 = parseInt('5'); // parseInt()
const num9 = parseFloat('5.2'); // parseFloat()
// A maneira mais fácil é chamar o Number.
const num10 = Number('5');
console.log(num7 + num9);
console.log(num10);
console.log(typeof num9);