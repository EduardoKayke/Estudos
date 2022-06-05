function Pessoa() {
    this.idade = 0

    setInterval(() => { // <-- Arrow Function
        this.idade++
        console.log(this.idade);
    }, 1000)
}
new Pessoa

// Mesmo exemplo da aula 007_This_e_a_Funcao_Bind_p2.js
// Com arrow Function não precisamos usar o .bind()