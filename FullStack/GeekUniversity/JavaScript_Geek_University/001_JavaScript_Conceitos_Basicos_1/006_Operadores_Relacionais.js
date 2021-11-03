/**
 * Operadores Relacionais
 *  
 * Os Operadores mais comuns são:
 * 
 * Igual a ==
 * Diferente de !=
 * Maior que >
 * Menor que <
 * Maior ou igual a >=
 * Menor ou igual a <=
 * 
 * Igual e do mesmo tipo que ===
 * Diferente e de outro tipo que !==
 */

var n1 = 54; n2 = 78;

console.log(n1 == n2); // True or false.
console.log(n1 != n2); // Diferente, true.
console.log(n1 > n2); // False.
console.log(n1 < n2); // True.
console.log(n1 >= n2); // False.
console.log(n1 <= n2); // True.
console.log(n1 === n2); // Do mesmo tipo sim, mas o valor não. False
console.log(n1 !== n2); // True.

if(n1 > n2){
    console.log(`n1 é maior que n2.`)
}else{
    console.log(`Não é maior que n2.`)
}
