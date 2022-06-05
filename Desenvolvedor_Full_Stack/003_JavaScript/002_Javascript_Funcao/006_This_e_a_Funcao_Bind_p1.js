const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar() // Bom dia

// Armazenar em uma variável
const falar = pessoa.falar
falar() // Undefined gerou um problema. Conflito entre paradigmas: funcional e OO

// Para resolver o problema acima usamos o bind.
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() // Bom dia