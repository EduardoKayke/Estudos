// Destructuring em arrays

const [a] =  [10] // criou a variável a e colocou um valor.
console.log(a); // 10

const [ n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6); // 10 9 undefined 0

// um array pode ter outros elementos do tipo array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota); // 6