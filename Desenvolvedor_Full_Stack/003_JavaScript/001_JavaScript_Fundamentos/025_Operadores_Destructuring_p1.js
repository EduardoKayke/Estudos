// Novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Usando destructuring pra pegar os valores do objeto
const { nome, idade } = pessoa
console.log(nome, idade); // Ana 5

// Podemos mudar os nomes também.
const { nome: n, idade: i } = pessoa
console.log(n, i); // Ana 5

// Se usarmos atributos que não existem no objeto.
// PAra não correr o risco da variável voltar sem valor, podemos por true.
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada); // undefined e true

// Exemplo que está mais a fundo.
const { endereco: { logradouro, numero, cep = true }} = pessoa
console.log(logradouro, numero, cep); // Rua ABC, 1000 e true