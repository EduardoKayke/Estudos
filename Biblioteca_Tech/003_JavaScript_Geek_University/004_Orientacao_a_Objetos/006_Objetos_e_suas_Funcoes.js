/**
 * Objetos e suas Funções. 
*/

const curso = {
    nome: `Programação em JavaScript`,
    horas: 25,
    preco: 27.99,
}

// { nome: 'Programação em JavaScript', horas: 25, preco: 27.99 }
console.log(curso);

// Object
console.log(typeof(curso));

//Para ter acesso a chave do objeto.
// [ 'nome', 'horas', 'preco' ]
console.log(Object.keys(curso));

//Para ter acesso ao valor do objeto.
// [ 'Programação em JavaScript', 25, 27.99 ]
console.log(Object.values(curso)); 

// MOstrar chave e valor.
console.log(Object.entries(curso)); 

//Usando forEach.
console.log(Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
})); 

// Usando destructuring
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Para criar atributos que sejam apenas para leitura.
Object.defineProperty(curso, `publicacao`, {
    enumerable: true, // Visível.
    writable: false, // Não podemos alterar o valor.
    value: `18/11/2021`
})

console.log(curso);
console.log(curso.publicacao); // 18/11/2021

// Criando objeto que não pode ser modificado.
Object.freeze(curso);

curso.nome = `Teste de mudança`;

console.log(curso.nome);// Programação em JavaScript. Não alterou.

//Array de objetos.
const usuarios = [
    {nome: `Eduardo`, empresa: `Google`},
    {nome: `Fernando`, empresa: `Netflix`},
    {nome: `Lucia`, empresa: `Amazon`},
]

// Para ver em formato de tabela.
console.table(usuarios);
// ┌─────────┬────────────┬───────────┐
// │ (index) │    nome    │  empresa  │
// ├─────────┼────────────┼───────────┤
// │    0    │ 'Eduardo'  │ 'Google'  │
// │    1    │ 'Fernando' │ 'Netflix' │
// │    2    │  'Lucia'   │ 'Amazon'  │
// └─────────┴────────────┴───────────┘

console.table(curso);
// ┌────────────┬─────────────────────────────┐
// │  (index)   │           Values            │
// ├────────────┼─────────────────────────────┤
// │    nome    │ 'Programação em JavaScript' │
// │   horas    │             25              │
// │   preco    │            27.99            │
// │ publicacao │        '18/11/2021'         │
// └────────────┴─────────────────────────────┘