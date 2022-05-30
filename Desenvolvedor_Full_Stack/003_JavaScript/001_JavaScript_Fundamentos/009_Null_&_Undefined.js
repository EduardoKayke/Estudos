// A variável a tem o endereço onde o objeto está localizado
const a = {name: 'Teste'}
// A variável b tem o mesmo endereço onde a variável a está apontando.
const b = a
// Ambas as variáveis apontam para o mesmo local na memória.

//Mudamos o valor que foi apontado, tanto para b como para a.
b.name = 'Opa'

console.log(b.name, a.name); // Ambas ficaram com 'Opa'.


// Nesse caso não vai funcionar a referência por apontamento.
// Aqui foi feito uma cópia do valor.
// Pois estamos trabalhando com tipos primitivos.
// Os valores de cada variável são idependentes. 
// Diferente do objeto que foi criado a parte e as variáveis eram apenas apontamentos.
let c = 3
let d = c
d++
console.log(d); // 4
console.log(c); // 3

//Valor inicial undefined
let valor// não inicializada
console.log(valor); // undefined

valor = null // ausência de valor = vazio
console.log(valor); // null

// Acessar variáveis com valor nulo pode causar erro no código
// console.log(valor.toString()); Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto.preco); // undefined
console.log(produto); // {} Objeto vazio

produto.preco = 3.50
console.log(produto); // { preco: 3.5 }

produto.preco = undefined // evite atribuir undefined, prefira o null
console.log(!!produto.preco); // false
console.log(produto); // { preco: undefined }

// delete produto.preco // no console fica {} objeto vazio
produto.preco = null // { preco: null }
console.log(produto); 
console.log(!!produto.preco); // false