/**
 * Operadores Aritmeticos.
 * 
 * + Adição
 * - Subtração
 * * Multiplicação
 * / Divisão
 * 
 * Operadores aritmeticos abreviados
 * +=
 * -=
 * *=
 * /=
 */

console.log(7 / 0); // Infinity.
console.log(`42` / 2); // Divisão mesmo sendo string.
console.log(`Geek` * 3); // NaN - Not a number.
console.log(0.1 + 0.7); // Imprecisão. 0.7999
var num = 42;
console.log((num).toString()) // Vira string.
console.log(13.343455544.toFixed(2)) // Diminui os decimais do float para duas casas.
console.log(Math.PI);
console.log(Math.PI.toFixed(3));
console.log(Math.pow(3, 2)); // 3²
console.log(Math.sqrt(81)); // Raiz quadrada de 81 = 9
console.log(typeof(42)); // Para ver o tipo do dado.
console.log(Number.isInteger(45)) // Esse valor é um inteiro? True.
console.log(Number.isInteger(`Eduardo`)) // Esse valor é um inteiro? False.

// Conversão binária
var valor = 10;
console.log(valor.toString(2)); // Binário. 1010