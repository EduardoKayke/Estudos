console.log(module.exports === this); // true
console.log(module.exports === exports); // true

this.a = 1 // Agora o a será visível fora do arquivo.
exports.b = 2 // Agora o b será visível fora do arquivo.
module.exports.c = 3 // Agora o c será visível fora do arquivo.

console.log(module.exports);
// { a: 1, b: 2, c: 3 }