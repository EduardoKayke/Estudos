const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Criar um objeto novo tendo como protótipo o pai.
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome); // Ana
console.log(filha1.corCabelo); // Preto

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable:true}
})

console.log(filha2.nome); // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Bia tem cabelo preto

console.log(Object.keys(filha1)); // [ 'nome' ]
console.log(Object.keys(filha2)); // [ 'nome' ]

for(let key in filha2) {
    // hasOwnProperty pega apenas os atributos do próprio objeto.
    filha2.hasOwnProperty(key) ?
        console.log(key) : 
        // nome
        console.log(`Por herança: ${key}`);
        // Por herança: corCabelo
}