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

