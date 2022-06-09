// Função construtora

function Pessoa(nome) {
    this.nome = nome // lembrando que é uma variável pública por causa do this.
    
    this.falar = () => {
        console.log(`Meu nome é ${this.nome}.`); // Meu nome é João.
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João.

// Lembrando que o this nos da acesso para mudarmos a variável.
// Você pode criar objetos por uma função construtora, uma classe e ou uma função factory.