console.log('-------------------SPREAD--------------------');
// Operador spread é o ... (reticências)

const numeros = [1, 2, 3, 4];
const novosNumeros = [...numeros];

novosNumeros.push(5);

console.log(numeros);
console.log(novosNumeros);

// ------------------------------------

const rex = {
    nome: 'Rex'
};

const max = {...rex, idade: 2, familia: 'Carnívoro'};
max.nome = 'Max';

console.log(rex);
console.log(max);


console.log('-------------------REST--------------------');
// Operador rest

const somar = (n1, n2) => n1 +n2;

console.log(somar(2, 3)); // Não consigo colocar mais números.

// Usaremos o rest

const somar1 = (...numeros) => numeros.reduce((a, b) => a + b);

console.log(somar1(2, 5, 5));