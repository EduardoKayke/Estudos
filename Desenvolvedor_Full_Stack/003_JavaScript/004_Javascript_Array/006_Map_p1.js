// Obervação! O Map cria um novo array.
const nums = [1, 2, 3, 4, 5]

// Map é um For com propósito.
let resultado = nums.map(e => e * 2)

console.log(resultado); // [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$: ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado);
// [ 'R$: 33,00', 'R$: 36,00', 'R$: 39,00', 'R$: 42,00', 'R$: 45,00' ]