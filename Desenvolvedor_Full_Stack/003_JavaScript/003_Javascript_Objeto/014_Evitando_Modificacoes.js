// Object.preventExtensions
// Não podemos adicionar, apenas excluir atributos e alterar.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)); // false, não é extensível.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto); // { nome: 'Borracha', preco: 1.99 }

//Object.seal = selar
// Não consegue adicionar ou excluir, mas consegue modificar os valores dos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)); // true
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes.
// Não consegue excluir, modificar ou alterar valores.