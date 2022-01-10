const numeros = [1, 2, 3, 4, 5, 8];

// .splice(indice, quantos deletar)
numeros.splice(1, 2);
console.log(numeros); // [ 1, 4, 5, 8 ]

// Remove o último elemento e também retorna.
numeros.pop();
console.log(numeros.pop()); // Para saber qual foi excluído.
console.log(numeros); // [ 1, 4, 5 ]