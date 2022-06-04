// Entender os Runtimes e fugir do escopo global. <= (Essa é a lição da aula, SUPER importante.)

// Assista a aula quando fizer revisão. Informações importantes. Aula 73 - Curso Web Moderno

// Básicamente o professor fala pra fugir do escopo global, pois o programa fica desprotegido. 
// Evitar criar funções sem variáveis. Pois essas sem as variáveis são executadas no escopo global.
// Const pode ficar no escopo global. Pois não são modificadas.
// Uma forma de acessar e esconder as variáveis do escopo global é criando um objeto. 

//Importante ver a aula nessa revisão. NÃO pule.

// Pra entender melhor o código abaixo.

let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a); // 3
console.log(global.b); // 123
console.log(this.c); // 456
console.log(module.exports.c); // 456
console.log(module.exports === this); // True, dentro de um arquivo o this é o module.exports
console.log(module.exports); // { c: 456, d: false, e: 'teste' } Isso seria equivalente a linha abaixo.
// module.exports = { e: 456, f: false, g: 'teste'}

// Variável sem var e let, aparece no escopo global do node.
abc = 3 // Não faça isso.
console.log(global.abc);