// pessoa -> aponta para um endereço na memória onde foi criado o objeto.
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
// Por isso ao fazer isso:
pessoa.nome = 'Pedro'
// não mudamos a referência da constante, mas sim o dado do objeto.
// a constante aponta para um endereço e no endereço temos o objeto.
console.log(pessoa); // { nome: 'pedro' }


// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
// Não podemos atribuir novamente o endereço pois pessoa está constante.
// então a atribuição acima nos retorna um erro.

// Vamos congelar o Objeto pessoa, assim não podemos mais mudar os atributos.
Object.freeze(pessoa)
pessoa.nome = 'Maria' // Não podemos atribuir por causa do freeze.
pessoa.end = 'Rua ABC' // Não será atribuido por causa do freeze.
delete pessoa.nome // Não há efeito por causa do freeze.
console.log(pessoa.nome); // Pedro
console.log(pessoa); // { nome: 'Pedro' }

// Para criarmo desde o começo, usamos o freeze.
const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome); // João