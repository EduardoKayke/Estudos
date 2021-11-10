var cursos = [
    'Programação para Leigos.',
    'Algoritmos e Lógica de Programação.',
    'Programação em C.',
    'Programação em Java.',
    'Programação em Python.',
    'Banco de Dados.',
    'Programação Web com Django Framework.',
    'Programação em JavaScript.',
];

console.log(cursos);
console.log(cursos.length);

// Definir uma função

function imprimir(curso, indice, array){
    console.log(`${indice} - ${curso}`);
    console.log(array);
};

/**
 * forEach = Uma tradução de forEach(Para Cada). Ou seja, para cada elemento
 * dentro do nosso recurso, imprima. forEach é uma estrutura de repetição
 * mais moderna.
 */
cursos.forEach(imprimir);

/**
 * Utilização de uma função anônima. (Lambda/callback) e template string
 */
cursos.forEach(function(curso, indice){
    console.log(`${indice} - ${curso}`);
});

// Mesma coisa que a de cima.
for (var i = 0; i < cursos.length; i++) {
    console.log(`${i} - ${cursos[i]}`);
}