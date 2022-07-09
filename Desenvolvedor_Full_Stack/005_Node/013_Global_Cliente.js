require('./012_Objeto_Global_Node')

console.log(MinhaApp.saudacao());
// stou em todos os lugares!

MinhaApp.nome = 'Eita!' // freeze
console.log(MinhaApp.nome); // Sistema legal