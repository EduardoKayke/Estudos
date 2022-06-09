// Classe
class Pessoa {
    constructor(nome) {
        this.nome = nome // lembrando que é uma variável pública por causa do this.
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`); // Meu nome é João.
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João.

// Função
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`) // Meu nome é João.
    }
}

const p2 = criarPessoa('João') 
p2.falar() // Meu nome é João.

// Usando a Classe temos o risco de não apontar pra variável, pois o this pode váriar dependendo do contexto.
// Mas na arrow function, a nossa função factory, isso não ocorre. O apontamento é o correto.