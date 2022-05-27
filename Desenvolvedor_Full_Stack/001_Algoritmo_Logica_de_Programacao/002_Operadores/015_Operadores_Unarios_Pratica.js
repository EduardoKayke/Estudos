let a= 1;
let b = 2;

console.log(++a === b++); // true
// True porque o incremento de B acontece depois.
console.log(a); // 2
console.log(b); // 3

//A melhor forma de fazer essa expressão acima é:

let c = 1;
let d = 2;

c++;
console.log(c === d);
d++;

// Mais sobre negação.
console.log(!true); // false
console.log(!false); // true

// false (uma negação), true (dupla negação)
console.log(!!'Texto'); 
console.log(!!''); // Um texto vazio se torna falso.
// Qualquer texto é considerado como true.
console.log(!!'false'); 
// true, a premissa é se tem algo dentro.
// Só string vazia que é false

console.log(!!true); // true
console.log(!!false); // false


// Todos os números são verdadeiros, menos o zero.
console.log(!!1); // true
console.log(!!0); // false
console.log(!!-1); // true
console.log(!!-0.00001); // true
