// Operador Ternário(?), vai operar em cima da hora e das
// duas strings.

let hora = 14;
let saudacao = hora <= 11 ? "Bom dia" : "Boa tarde";
console.log(saudacao);

// O mesmo exemplo só que com o "Boa noite".
// Se a expressão for falsa ele cai em outro operador ternário.

let hora1 = 23;
let saudacao1 = hora1 <= 11 ? "Bom dia" : hora1 <= 17 ? "Boa tarde": "Boa noite";
console.log(saudacao1);