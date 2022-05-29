// Modo normal de concatenação
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao); // Olá Rebeca!

const template = `Olá ${nome}!`
console.log(template); // Olá Rebeca!

// expressões...
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase() // Vamos colocar essa função dentro do template string
console.log(`Ei... ${up('cuidado')}!`); // Ei... CUIDADO!