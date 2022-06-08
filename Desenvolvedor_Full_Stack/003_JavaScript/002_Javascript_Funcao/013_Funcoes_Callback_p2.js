const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // push, adiciona elementos
    }
}
console.log(notasBaixas1); // [ 6.5, 5.2, 3.6 ]

// Com callback
// Filtrando elementos de um array com determinado critério.
const notasBaixas2 = notas.filter(nota => nota < 7)
// Se nota menor que sete, então aparece no array final
console.log(notasBaixas2); // [ 6.5, 5.2, 3.6 ]