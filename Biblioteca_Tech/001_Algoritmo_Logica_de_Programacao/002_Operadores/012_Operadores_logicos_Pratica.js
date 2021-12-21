let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE); // false


let resultadoOu = '#2 (OR) - Vai pro shopping? ';
resultadoOu +=  estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu); // true

const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"?', comprarTV50); 

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 32"?', comprarTV32);

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?', tomarSorvete);

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa?', ficarEmCasa); 