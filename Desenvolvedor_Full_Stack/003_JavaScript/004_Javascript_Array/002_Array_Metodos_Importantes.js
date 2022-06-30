const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Remove o último elemento do array
pilotos.pop() // Massa quebrou o carro!

//Adiciona um elemento dentro do array
pilotos.push('Verstappen')

//Remove o primeiro elemento do array
pilotos.shift() // Vettel quebrou o carro!

console.log(pilotos);
// [ 'Alonso', 'Raikkonen', 'Verstappen' ]

//Adiciona um elemento na primeira posição do array
pilotos.unshift('Hamilton')

console.log(pilotos);
// [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]


//Splice pode adicionar e remover elementos
// Adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);
// [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// Remover com splice
pilotos.splice(3, 1) // Massa quebrou novamente :(
console.log(pilotos);
// [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// Slice retorna um novo array
// Pegamos um novo array a partir do índice 2.
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);
// [ 'Bottas', 'Raikkonen', 'Verstappen' ]

// Pegando elementos do 1 até o 4, porém o 4 não entra
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);
// [ 'Alonso', 'Bottas', 'Raikkonen' ]