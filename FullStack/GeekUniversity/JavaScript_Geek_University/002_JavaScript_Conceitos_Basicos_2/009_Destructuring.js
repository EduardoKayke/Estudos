/**
 * Destructuring extrai dados dos containers.
 */

// Destructuring com array.

const numeros = [1, 3, 5, 7];

const [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(`----------------------------------`);
// Podemos descartar determinado valor;
const [n1, , n3, n4] = numeros;

console.log(num1);
console.log(num3);
console.log(num4);
console.log(n1, n3, n4);
console.log(`----------------------------------`);

// Podemos colocar valor default que será usado caso não haja no container.

// const numeros = [1, 3, 5, 7];
const [numero1, numero2, numero3, numero4 = 34, numero5 = 99] = numeros;

console.log(numero1); // Resultado 1
console.log(numero2); // Resultado 3
console.log(numero3); // Resultado 5
console.log(numero4); // Resultado 7
console.log(numero5); // Resultado 99 Caso não tivesse 99 seria undefined.
console.log(`----------------------------------`);

// Destructuring com objeto.

const produto = {
    nome: `Playstation 4`,
    preco: 1678.44,
}

const {nome, preco} = produto;

console.log(nome);
console.log(preco);

console.log(`${nome} custa ${preco}.`);