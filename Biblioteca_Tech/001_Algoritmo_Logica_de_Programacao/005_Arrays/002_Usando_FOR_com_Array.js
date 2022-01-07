const numeros = [1, 2, 3.2, 4, 5.7, 6];

for(let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}

// Outro exemplo de array.
// foreach (Percorra cada um dos elementos).

const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);

// Outro exemplo.

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);

// for of pra acessar os valores e o for in o índice.