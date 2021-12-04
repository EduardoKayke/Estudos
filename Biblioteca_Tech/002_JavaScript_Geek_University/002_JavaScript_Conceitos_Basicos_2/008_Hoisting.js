/**
 * Hoisting
 * 
 * É um comportamento da linguagem JavaScript.
 * 
*/



// var nome; // Iça a declaração da variável. E joga pra cima.
console.log(nome); // undefined / Aqui ocorre o Hoisting.(Içamento)


// Inicializando a variável. Com o let o programa quebra!
// Com const também quebra!
var nome = `Geek`; 

console.log(nome); 

// Isso não é bom. Evite!