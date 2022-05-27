// Array é uma estrutura de dados.

const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3]);

notas[4] = 8.7;

console.log(notas);

// Colocando valores dentro de um array.

const nomes = [];

nomes[0] = "Pedro";
nomes[1] = "Ana";
nomes[2] = "Bia";
nomes[3] = "Gui";
nomes[4] = "Rebeca";
nomes[9] = "Thiago";

console.log(nomes);

// Por dentro do console.log
// console é um objeto.
// .log é uma função. Que foi colocada dentro do objeto(console)

console.log(typeof console);
console.log(typeof console.log);

// Dentro do objeto podemos colocar funções e atributos.
// Método é quando chamamos uma função que pertence a um objeto. Exemplo do .log - console.log.

const numeros = [1, 2, 3];

console.log(typeof numeros);

// Usando um método pra adicionar valores ao array.

numeros.push(4);
numeros.push(5);
numeros.push(10.98);
console.log(numeros);
// length nesse caso é um atributo
console.log(numeros.length);

