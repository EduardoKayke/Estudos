// Vamos importar
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola); 
// Fala Pessoa

console.log(moduloA.bemVindo);
// Bem Vindo ao Node!

console.log(moduloA.ateLogo);
// Até o próximo exemplo!

console.log(moduloA);
//{ ola: 'Fala Pessoal',
//  bemVindo: 'Bem Vindo ao Node!',
//  ateLogo: 'Até o próximo exemplo!' }

console.log(moduloB.bomDia);
// Bom dia

console.log(moduloB.boaNoite());
// Boa noite

console.log(moduloB);
//{ bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }