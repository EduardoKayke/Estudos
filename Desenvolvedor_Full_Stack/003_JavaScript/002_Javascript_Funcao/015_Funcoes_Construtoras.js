function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado, let ou const
    let velocidadeAtual = 0

    // metodo publico, this
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico, this
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); // função
console.log(typeof ferrari);  // objeto