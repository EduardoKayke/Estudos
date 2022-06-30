let array = []
console.log(typeof array); // Object

// function, object e object
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]); // Bia
console.log(aprovados[3]); // Undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);  // 5
console.log(aprovados);
// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia' ]

aprovados[9] = 'Rafael'
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort() // Ordem alfabética.
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // Bia

aprovados = ['Bia', 'Carlos', 'Ana']
// splice, a partir do índice 1, vamos excluir 1 item.
// Vamos adicionar um elemento
aprovados.splice(1, 1, 'elemento') // removendo o carlos
console.log(aprovados); // [ 'Bia', 'elemento', 'Ana' ]