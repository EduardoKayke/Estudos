// Se tiver dúvidas assista a aula 94 curso web moderno
// Primeiro exemplo com Bind.
function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000)
}
new Pessoa

// Segundo exemplo
function Pessoa2() {
    this.idade = 0

    const self = this

    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }, 1000)
}
new Pessoa2