const cursos = [
    `Banana`,
    `Uva`,
    `Morango`,
    `Beterraba`,
    `Mandioca`,
    `Abobrinha`,
    `Cebola`,
    `cenoura`
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

cursos.forEach(apresentar); // Aqui está ocorrendo o callback.

// Usando lambda - Aqui está ocorrendo o callback.
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
})

//Separador pra visualizar melhor no console.
console.log(`--------------------------`);

// Usando arrow function - Aqui está ocorrendo o callback.

cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

//O callback é passar uma função com parâmetro para outra 
//função que irá executar essa função mediante um evento.
//No caso dos nossos exemplos foi o forEach a função callback.

//Separador pra visualizar melhor no console.
console.log(`--------------------------`);

// Com o passar do tempo iremos fazendo códigos menores.
// Iniciante, apenas resolvendo o problema, sem simplificar.

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = [];

for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}

console.log(menores);

// Com o passar do tempo iremos fazendo códigos menores.
// Iniciante, apenas resolvendo o problema, sem simplificar.

const precos1 = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores1 = [];

for(let p in precos1){
    if(precos1[p] < 50){
        menores1.push(precos1[p]);
    }
}

console.log(menores1);

// No primeiro momento o programador pensa em resolver o problema.
// Depois o objetivo é ir simplificando.

//Simplificando Exemplo 1
const precos2 = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores2 = [];

menores2 = precos.filter(function(preco){
    return preco < 50;
})

console.log(menores);

//Simplificando Exemplo 2
const precos3 = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores3 = [];
// isso é um callback     preco => preco < 50
menores3 = precos3.filter(preco => preco < 50);

console.log(menores3);