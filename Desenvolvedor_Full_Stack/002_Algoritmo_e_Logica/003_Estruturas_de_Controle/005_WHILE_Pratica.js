console.log("Exec...Ctrl + Alt + N");
console.log("Parar...Ctrl + Alt + M");

while (false) {
    console.log('Repetição infinito');
}


// Exemplo quantidade indeterminada de repetições.

let quantidade = 0;

while (Math.random() < 0.9) {
    quantidade++;
}

console.log(`Quantidade: ${quantidade}.`);


// Outro Exemplo
const futuro = Date.now() + 1000;
let quantidade1 = 0;

while (Date.now() < futuro) {
    quantidade1++;
}

console.log(`Quantidade: ${quantidade1}.`);



// Outro Exemplo - Laço determinado de repetições.
// Declaração, expressão e o incremento.

let controle = 1;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('Fim');