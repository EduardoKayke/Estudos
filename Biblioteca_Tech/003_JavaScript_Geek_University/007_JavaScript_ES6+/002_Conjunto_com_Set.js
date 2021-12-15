/**Cojuntos com Set
 * 
 * - Conjuntos não aceitam repetição de valores.
 * - Conjuntos não são indexados. (Sem posição)
 */

// Declarando um conjunto.
let cursos = new Set();

// Adicionando valores.
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// Adicionar valores concatenados.
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

console.log(cursos); // Aqui já mostra o tamanho(size) também.
console.log(cursos.size); // 7

// Verificar se o elemento está dentro do conjunto.
console.log(cursos.has('Banco de Dados')); // True

// Deletar elementos de um conjunto.
cursos.delete('Programação para Leigos')
console.log(cursos);

// Para não ter repetições, criando um conjunto a partir de um array;
let frutasnovas = ['Manga', 'Uva', 'Jaca', 'Uva']; // 2 Uvas
let frutas_unicas = new Set(frutasnovas);
console.log(frutas_unicas); // Set(3) { 'Manga', 'Uva', 'Jaca' }