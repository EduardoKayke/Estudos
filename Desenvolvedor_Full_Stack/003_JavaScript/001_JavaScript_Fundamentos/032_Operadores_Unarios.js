let num1 = 1
let num2 = 2

num1++
console.log(num1); // 2
--num1 // Maior prioridade
console.log(num1); // 1

console.log(++num1 === num2--); 
// True pq o ++ foi executado antes. Já o -- foi depois. Pois o num2, só será decrementado depois da comparação. Ou seja, a comparação foi feita antes da decrementação. Logo ambos tinham o valor 2.
console.log(num1 === num2); // false 