// Var

var  numero = 42;
console.log(numero);

numero = numero + 18;
console.log(numero);

// Let

let outroNumero = 42;
console.log(outroNumero);

outroNumero = outroNumero + 18;
console.log(outroNumero);

let nome = `Geek`
console.log(nome);

nome = `University`;
console.log(nome);

// Apartir desse momento só vamos declarar variáveis usando let.
// Let é a forma mais moderna, evita erros e ela mantem o escopo local.

for(let i = 0; i < 5; i++){ // se trocar o let pelo var, sai no console.
    let valor = i * 3;      // Escopo global para var.
    console.log(valor);
}

console.log(`----------Escopo global, 12 e o 5 do var-------------`);
// console.log(valor);
// console.log(i);

// Const

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

// TAXA = 5; Não permite
// console.log(TAXA); Não permite


// Constante vs Mutação
const curso = {
    nome: `Programação em JavaScript`,
};
console.log(curso.nome);

// Não posso alterar o valor de uma constante.
// TAXA = 5; Não permite

// Podemos realizar mutação em dados contidos na constante.
curso.nome = `Programação em Python`; // Mutação
console.log(curso);

/**
 * dicas de como declarar variaveis em JavaScript
 * 
 * A variável poderá ser alterada? (Vai variar?)
 * Se sim, use let, caso contrário use const.
 */

const valor = 5;

for(let i = 0; i < valor; i++){
    console.log(valor - i);
}