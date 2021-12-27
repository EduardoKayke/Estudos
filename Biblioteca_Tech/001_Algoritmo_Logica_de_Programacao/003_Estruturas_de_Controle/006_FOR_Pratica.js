// Declaração, expressão e o incremento.
// Para somar de dois em dois controle += 2 (controle++)
for (let controle = 1; controle <= 10; controle++) {
    console.log(controle);
}

console.log("Fim.");

// formas d criar um laço for infinito

// for(;;) {
// }

// for (; true; ) {
// }

// Desafio

for (let i = 7; i >= 0; i--) {
    console.log(i);
}

//Separador de conteúdo, pro terminal.
console.log('\n');

// Outro exemplo de FOR.

// [1, 1], [1, 2], [1, 3]
// [2, 1], [2, 2], [2, 3]
// [3, 1], [3, 2], [3, 3]

for(let i = 1; i <= 3; i++){
    let linha = '';
    for(let j = 1; j <=3; j++){
        linha +=  `[${i}, ${j}]`
    }
    console.log(linha);
}