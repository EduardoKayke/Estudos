// Operadores Relacionais

console.log('01 -', '1' == 1); // True
console.log('02 -', '1' === 1); // False
console.log('03 -', '3' != 3); // False
console.log('04 -', '3' !== 3); // True

console.log('05 -', 3 < 2); // False
console.log('06 -', 3 > 2); // True
console.log('07 -', 3 <= 2); // False
console.log('08 -', 3 >= 2); // True

const d1 = new Date(0)
const d2 = new Date(0)

// Aqui não faz diferença se é estritamente igual ou igual. Porque apontam no mesmo lugar de memória.
console.log('09 -', d1 === d2); // False
console.log('10 -', d1 == d2); // False

console.log('11 -', d1.getTime() == d2.getTime()); // True
console.log('11 -', d1.getTime() === d2.getTime()); // True


console.log('12 -', undefined == null); // True
console.log('13 -', undefined === null); // False